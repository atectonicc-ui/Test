// Renders index.html to an MP4 (picture + synthesised score) and a set of stills.
//   node render.mjs              → media/iphone-18-reveal.mp4 + media/stills/*.jpg
//   node render.mjs --stills     → stills only
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(root, 'media');
const FPS = 24, DUR = 30;
const STILLS = { '01-origin': 2.2, '02-liquid': 6.4, '03-solidify': 8.25, '04-frame': 11.4, '05-eye': 14.55,
  '06-capture': 17.6, '07-display': 23.4, '08-reveal': 28.0 };
const stillsOnly = process.argv.includes('--stills');

mkdirSync(path.join(out, 'stills'), { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
page.on('pageerror', e => { console.error('page error:', e.message); process.exitCode = 1; });
await page.goto(pathToFileURL(path.join(root, 'index.html')).href + '?render=1');
await page.evaluate(() => window.ready);
const canvas = page.locator('#c');

for (const [name, t] of Object.entries(STILLS)) {
  await page.evaluate(t => window.renderFrame(t), t);
  await canvas.screenshot({ path: path.join(out, 'stills', `${name}.jpg`), type: 'jpeg', quality: 90 });
}
console.log('stills written');

if (!stillsOnly) {
  const wav = path.join(out, 'score.wav');
  writeFileSync(wav, Buffer.from(await page.evaluate(() => window.exportWav()), 'base64'));
  const mp4 = path.join(out, 'iphone-18-reveal.mp4');
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-', '-i', wav,
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '20', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    '-af', 'loudnorm=I=-14:TP=-1.5:LRA=11', '-ar', '48000', '-c:a', 'aac', '-b:a', '192k', '-shortest', mp4], { stdio: ['pipe', 'inherit', 'inherit'] });
  const total = FPS * DUR;
  for (let i = 0; i < total; i++) {
    await page.evaluate(t => window.renderFrame(t), i / FPS);
    const buf = await canvas.screenshot({ type: 'png' });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % 48 === 0) process.stdout.write(`\rframe ${i}/${total}`);
  }
  ff.stdin.end();
  await new Promise((res, rej) => ff.on('close', c => c ? rej(new Error('ffmpeg exit ' + c)) : res()));
  console.log(`\nwrote ${mp4}`);
}
await browser.close();
