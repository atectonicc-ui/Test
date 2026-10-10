# iPhone 18 — "Light, Held." 
### 30-Second Cinematic Reveal · Motion Design & Production Brief

> **Concept, in one line:** A single beam of light enters darkness, becomes liquid glass, and is sculpted into the iPhone 18. We never show the whole phone until the last four seconds. Everything before it is touch, reflection, and anticipation.

| | |
|---|---|
| **Format** | 30s hero spot (+ 15s / 6s cutdowns) |
| **Delivery** | 4K DCI ProRes 4444 XQ master · 16:9, 9:16, 1:1, 4:5 safe-reframes |
| **Frame rate** | 24 fps (live-action macro plates at 120 / 240 fps for speed ramps) |
| **Color pipeline** | ACEScg working space → Rec.709 + P3-D65 HDR (1000 nits) deliverables |
| **Tone** | Quiet confidence. Precise, tactile, futuristic yet grounded. No hype — the object speaks. |

> *Note: "iPhone 18" design details below are creative direction, not confirmed hardware specs. Finalize industrial-design references against the locked CAD from the client before lookdev.*

---

## 1. Visual Style & Aesthetics

### 1.1 Image Direction — "Photoreal Restraint"

The film should feel **shot, not rendered.** Every CG frame must survive side-by-side comparison with a real macro plate.

**Macro lens language**
- Reference glass: Laowa 24mm f/14 Probe, Canon MP-E 65mm 1–5×, Zeiss Supreme Prime 100mm macro.
- Shallow focus at 1:1–3:1 magnification; focal planes measured in **millimeters**. Let the edge of the frame fall into creamy bokeh.
- Slow, motion-controlled moves (Bolt / MRMC Cinebot). No handheld. Camera moves are **deliberate, decelerating, and finish before the cut.**
- Subtle optical imperfections are mandatory in CG: 0.3–0.5% chromatic aberration at frame edges, mild anamorphic-style oval bokeh, faint halation on specular highlights, fine film grain (35mm, 400T, ~8% opacity).

**Material studies**
| Material | Direction |
|---|---|
| **Brushed titanium (frame)** | Anisotropic micro-brushing running *along* the band. Highlights should stretch into long thin "comet" streaks as the light rakes across. Bead-blasted chamfer edges catch a hairline specular. |
| **Ceramic-shield glass (front)** | Near-invisible. Read it only through its edge — a razor-thin cyan/green refractive line along the curve, and reflections that slide across it. |
| **Frosted / textured back glass** | Satin diffusion; light enters and blooms softly instead of reflecting. Micro-etched texture visible only at 5× macro. |
| **Sapphire camera lenses** | Multi-layer AR coating: reflections show a faint violet/amber dichroic shift. Deep, bottomless black inside the barrel. |
| **"Liquid Glass" UI** | The signature dynamic. Translucent, refractive, viscous surfaces that bend the world behind them. Moves like mercury with surface tension — overshoots slightly, then settles. Refraction index ~1.45, light dispersion on the edges, specular rim highlight that follows the key light. |

**Liquid glass dynamics (VFX spec)**
- Simulated in Houdini FLIP (high viscosity, high surface tension) → meshed → rendered as dielectric with dispersion (Redshift / Karma XPU).
- Behavior: *forms → hesitates → snaps to geometry.* Every liquid transition ends on a perfectly crisp hard surface — the "liquid becomes product" motif.
- Never splashy. Never chaotic. Think **surface tension, not splash.**

**Natural lighting reflections**
- Primary reflections come from large, soft, *physical-feeling* sources: 6 m overhead softbox, two long strip lights, a single hard "sun" spot.
- Reflections in glass and titanium must show **readable studio geometry** (strip edges, grid diffusion) — that's what sells real.
- One "window" reflection (an implied off-screen skylight) appears in Scenes 3 and 6 to ground the object in the world.

### 1.2 Color Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Base | **Void** | `#050506` | Backgrounds. Never pure black — keeps grain alive. |
| Shadow | **Graphite** | `#1C1D21` | Falloff, frame shadow side |
| Metal | **Natural Titanium** | `#B9B4AB` | Hero chassis, warm-neutral |
| Highlight | **Specular White** | `#F5F5F7` | Typography, peak highlights |
| Accent 1 | **Glacier Cyan** | `#7FD6FF` | Glass edge refraction, light trails |
| Accent 2 | **Ultraviolet Dusk** | `#6E5BFF` | Volumetric glow, display bloom |
| Accent 3 | **Ember** | `#FF9A5A` | One warm rim light; final reveal kiss |

**Grade:** Cool, low-saturation base with **one** warm accent per shot. Lifted blacks to `#050506` (not crushed), soft highlight roll-off (filmic shoulder), clean neutral midtones on the titanium. Skin of the product is the reference — never let the accents contaminate the metal's true color.

### 1.3 Lighting Design

- **Key:** single hard source at 75° raking angle — reveals brushing and machining texture.
- **Shape:** two vertical strip softboxes → long clean specular lines down the titanium band.
- **Rim:** narrow Ember (`#FF9A5A`) kicker on the far edge — separates the silhouette from the void.
- **Volumetrics:** low-density atmospheric haze (density 0.002–0.004) catching a single Ultraviolet/Cyan beam. Visible god-rays only in Scenes 1 and 6.
- **Display as a light source:** the screen emits — it should spill a soft colored glow onto the frame edge and onto the "floor" reflection.
- **Floor:** black acrylic with 8–12% reflectivity and a blurred falloff — gives the phone a grounded reflection without visual clutter.

---

## 2. Scene-by-Scene Motion Storyboard (0:00 – 0:30)

**Rhythm:** 6 scenes · musical structure *Silence → Pulse → Build → Drop → Showcase → Resolve*. Cuts land on beats at 96 BPM (one beat = 0.625s; one bar = 2.5s).

---

### SCENE 1 — "Origin" · `0:00 – 0:04`
**Visual / Camera**
- Total darkness. A single filament of light — thin as a hair — draws itself left to right across frame.
- Camera: locked-off, then a **2% imperceptible push-in**. Focal plane is razor-thin; the line enters and exits focus as it travels.
- The line pauses at frame center, hesitates, and **drops into a droplet of liquid glass** that hangs in mid-air, refracting the void around it.

**Motion Graphics & VFX**
- Light trail: additive emissive spline with a cyan-to-white core gradient, 2-frame motion blur trail, faint dispersion fringe.
- Volumetric haze barely revealed by the line's glow.
- Droplet: Houdini FLIP, surface tension high — wobbles 3 times, decaying.

**On-Screen Text**
- None. Silence is the opening statement.

---

### SCENE 2 — "Liquid to Form" · `0:04 – 0:09`
**Visual / Camera**
- Extreme macro on the droplet. It **stretches and flows**, tracing an invisible path — the reader slowly realizes it's drawing the curve of a phone corner.
- Camera: slow orbit (15° arc) with motion control, matching the liquid's travel. **Rack focus** from droplet surface to its refracted interior.
- At 0:08 the liquid **snaps solid** into brushed titanium — the first hard material in the film. Highlight streak blasts across the brushing at the exact frame of solidification.

**Motion Graphics & VFX**
- Liquid → metal material transition: animated blend driven by a noise-masked wipe traveling along the curve (12 frames).
- Micro-particles of light shed from the solidifying edge and dissolve.
- Subtle lens breathing on the rack focus (sells the "real lens").

**On-Screen Text**
- None.

---

### SCENE 3 — "The Frame" · `0:09 – 0:14`
**Visual / Camera**
- Sweeping macro dolly along the titanium band — we travel the edge like a landscape. Buttons rise past camera like architecture; the camera control button passes in sharp focus.
- Camera: lateral track at constant speed with a gentle **speed ramp** (120fps plate → 24fps) as we pass the button.
- Reflection of the implied skylight slides along the metal.
- End on the corner: the frosted back glass and the **camera plateau** emerge out of the darkness.

**Motion Graphics & VFX**
- Floating **ultra-thin measurement lines** (0.5px, 30% white) briefly annotate the edge — engineering-drawing feel — then fade. A nod to precision, not data.
- Light trail from Scene 1 reappears, racing *ahead* of camera along the band.

**On-Screen Text**
- Lower-left, small caps, tracking +120: `TITANIUM. REFINED.`
- Fade in 8 frames, hold 2s, dissolve via soft blur (not a hard cut).

---

### SCENE 4 — "Eye" · `0:14 – 0:19`
**Visual / Camera**
- Extreme macro **into** the main camera lens. Concentric AR coatings shimmer violet and amber. The camera pushes *through* the lens elements — a fly-through of glass layers.
- On the **beat drop at 0:15**, we pass the sensor and burst out into a captured photograph: a cinematic night-city frame exploding in sharp detail, then pulling back to reveal it's on the display.

**Motion Graphics & VFX**
- Lens interior: stacked refractive elements, dichroic reflections, aperture ring sliding past camera.
- Sensor moment: a grid of microscopic photosites lights up in a wave (1 frame of ultra-detail — "pixel bloom").
- Transition: light-burst wipe synced to the kick drum.

**On-Screen Text**
- Center, appears with the drop, then scales down 4% while holding:
  `See further in the dark.`
- Secondary line, smaller, 60% opacity: `Pro camera system.`

---

### SCENE 5 — "Liquid Display" · `0:19 – 0:25`
**Visual / Camera**
- Front-on, slightly low angle; the display fills 70% of frame. The phone is dark glass, then the UI **pours in** — widgets and app icons form from liquid glass droplets and snap into the grid.
- Camera: slow 10° rotation around the Y axis so reflections slide across the glass, proving it's a physical surface.
- Fast montage within the screen (3 beats): Dynamic Island morphing → refractive notification stack → glass widget lifting off the display in 3D parallax.

**Motion Graphics & VFX**
- **Liquid Glass UI overlays:** translucent panels with real-time refraction of the wallpaper beneath, rim highlight tracking the key light, surface-tension "settle" on every element (overshoot 6%, settle in 10 frames).
- One UI panel **breaks the plane** and floats off the glass into 3D space, casting colored light onto the titanium.
- Ultraviolet Dusk display bloom spills onto the black floor reflection.

**On-Screen Text**
- Right third, stacked, staggered in (4 frames apart):
  `Brighter.`
  `Smarter.`
  `Unmistakably fluid.`

---

### SCENE 6 — "Reveal" · `0:25 – 0:30`
**Visual / Camera**
- For the first time: **the full phone.** Floating, slightly tilted (12° yaw, 6° roll), slowly rotating to front-on. Volumetric beam from above; the Ember rim light kisses the edge.
- Camera: crane-down + push-in that **decelerates to a perfect stop** at 0:27. Total stillness for the final 3 seconds — confidence.
- The light filament from Scene 1 traces the silhouette once and disappears into the frame edge — the loop closes.

**Motion Graphics & VFX**
- God-rays through haze, very subtle dust motes drifting.
- Floor reflection fades in beneath.
- Final glint: one specular sweep across the glass on the last downbeat.

**On-Screen Text**
- Product name centered beneath the phone, fades in over 18 frames:
  `iPhone 18`
- Below, smaller, 50% opacity, after 12-frame delay: `Built for the light ahead.`
- Final card (0:29): Apple logo, small, centered. Hold to black.

---

### Typography System
| Element | Spec |
|---|---|
| Typeface | **SF Pro Display** (headlines), **SF Pro Text** (secondary) — or SF Compact for 9:16 |
| Weights | Semibold for product name; Regular / Light for taglines. Never bold. |
| Size (4K) | Product name 140px · Taglines 72px · Secondary 40px |
| Tracking | Headlines -1%; small-caps labels +120 |
| Color | `#F5F5F7` on Void; secondary at 50–60% opacity |
| Animation | Fade + 6px upward drift + 4px→0 blur, ease `cubic-bezier(0.22, 1, 0.36, 1)`. Exits by blur-dissolve, never slide. |
| Layout | Generous negative space. One idea per frame. Max 4 words per line. |

### Motion Principles
1. **Every move decelerates.** Ease-out dominance; nothing stops abruptly except on purpose (Scene 6).
2. **Liquid becomes solid.** The recurring transition grammar.
3. **Light leads, camera follows.** The light filament is our guide through every scene.
4. **One hero per frame.** If two things move, one is subordinate.
5. **Cuts on the beat; moves between them.**

---

## 3. Audio & Music Direction

### 3.1 Music
- **Genre:** Minimal cinematic electronica meets modern orchestral — think the clarity of Jon Hopkins / Ólafur Arnalds, with a contemporary hybrid-trailer drop.
- **Tempo:** **96 BPM** (half-time feel = 48 for the opening; full groove from the drop).
- **Key:** D minor → resolves to F major on the reveal (lift without bombast).

| Time | Section | Dynamics |
|---|---|---|
| 0:00–0:04 | **Silence → Air** | Room tone, a single sustained high sine (~4 kHz, barely there) that tracks the light filament. |
| 0:04–0:09 | **Pulse** | Felt-piano motif (4 notes), soft analog synth pad swelling underneath (Juno-style, slow filter open). |
| 0:09–0:14 | **Build** | Arpeggiated synth enters (16th notes, low velocity), string ostinato in celli, riser + reverse-reverb swell. |
| 0:14–0:15 | **Breath** | Half-beat of near-silence before the drop. |
| 0:15–0:25 | **Drop / Showcase** | Tight punchy kick + sub, sidechained pads, clipped percussive glitches synced to UI snaps. Strings full. |
| 0:25–0:30 | **Resolve** | Band drops out; piano motif returns in major, one sustained chord with long reverb tail to black. |

**Mix notes:** −14 LUFS integrated (broadcast: −24 LKFS deliverable), leave −6 dB headroom pre-limiter, wide stereo on pads, mono kick & sub. Deliver stems: Music / SFX / Dialogue (n/a) / Sub.

### 3.2 Sound Design (SFX Cue Sheet)
| TC | Cue | Description |
|---|---|---|
| 0:00.5 | **Filament draw** | Thin glassy sine-sweep, panned L→R with the light. |
| 0:03.5 | **Droplet form** | Wet *pluck* + soft sub-bass thump (40 Hz) as droplet holds in air. |
| 0:04–0:08 | **Liquid flow** | Viscous slow pour layered with granular glass shimmer. |
| 0:08 | **Solidify** | Crisp *metallic tick* + titanium ring (resonant tail ~1.2s). Signature cue. |
| 0:09–0:13 | **Edge travel** | Low airy metallic swoosh following the dolly; subtle mechanical *click* as camera passes the button. |
| 0:14 | **Lens dive** | Aperture-blade iris rustle + rising tonal whoosh. |
| 0:14.8 | **Pre-drop inhale** | Reverse cymbal + vacuum suck-out. |
| 0:15 | **Drop / shutter** | Layered shutter *snap* + sub-bass swell (30 Hz, 0.8s) + glass shimmer burst. |
| 0:19–0:25 | **UI pours** | Each UI snap: soft *suction click* (silicone + glass tap); notification stack: micro-chimes, tuned to the key. |
| 0:22 | **Panel lift-off** | Airy glass *whoomph* with doppler. |
| 0:27 | **Final glint** | High shimmering glass sparkle, stereo-wide, 2s decay. |
| 0:29 | **Logo** | Silence. Only the music tail. |

---

## 4. AI Keyframe Prompts (Midjourney v7 / equivalent)

### Prompt 1 — Chassis Macro (Scene 3)
```
extreme macro photograph of a premium smartphone's brushed titanium edge band, anisotropic brushed metal texture with long streaking specular highlights, bead-blasted chamfer catching a hairline reflection, side button in sharp focus, frosted satin back glass falling into creamy bokeh, raking hard light at 75 degrees, two soft vertical strip-light reflections, single warm amber rim light, deep near-black background, faint atmospheric haze, shot on Canon MP-E 65mm macro at 3x magnification, f/4, razor-thin depth of field, subtle chromatic aberration, 35mm film grain, Apple product photography, minimalist, photorealistic, 8k --ar 16:9 --style raw --s 150 --v 7
```

### Prompt 2 — Liquid Glass Display Technology (Scene 5)
```
photorealistic close-up of a next-generation smartphone display at a slight low angle, translucent liquid glass user interface panels with real refraction and light dispersion on their edges, one glass widget lifting off the screen into 3D space casting soft ultraviolet and cyan light onto the titanium frame, viscous mercury-like glass droplets forming app icons, glossy black acrylic floor with soft reflection, ultraviolet glow blooming from the display, studio strip-light reflections sliding across the cover glass, dark minimalist studio, cinematic shallow depth of field, Apple keynote aesthetic, ultra-detailed, physically accurate glass caustics --ar 16:9 --style raw --s 200 --v 7
```

### Prompt 3 — Dynamic Hero Lighting Reveal (Scene 6)
```
cinematic hero product shot of a sleek titanium smartphone floating in a dark void, tilted slightly and rotating, volumetric light beam from above cutting through fine haze with visible god rays, warm ember rim light tracing the silhouette, thin glowing cyan light trail wrapping around the phone's edge, triple sapphire camera lenses with violet and amber anti-reflective coating reflections, black reflective floor below with blurred reflection, drifting dust motes catching light, generous negative space, high-end commercial cinematography, ARRI Alexa 35 look, anamorphic bokeh, soft filmic highlight roll-off, photorealistic, premium and minimal --ar 21:9 --style raw --s 250 --v 7
```

**Prompt usage tips**
- Lock a consistent look with `--sref` from the first approved frame, and `--cref` / omni-reference for the phone body across all three.
- Avoid the word "iPhone" or "Apple" in generators to reduce logo hallucinations; composite the approved CAD render/branding in post.
- Negative guidance (where supported): `--no text, watermark, logo, fingerprints, dust specks on glass, plastic look, oversaturated colors, cartoon`.

---

## 5. Production Notes
- **Pipeline:** C4D/Houdini (sim) → Redshift/Karma XPU (render) → Nuke (comp, lens FX, grain) → DaVinci Resolve (grade, ACES) → Pro Tools (mix).
- **Hybrid capture:** shoot real macro plates of titanium and glass samples on motion control for texture reference and composited highlight passes.
- **Cutdowns:** 15s = Scenes 2, 4 (drop), 6 · 6s = Scene 4 drop → Scene 6 reveal.
- **Vertical (9:16):** reframe with phone centered upper-middle; type moves to lower third safe zone.
- **Legal:** all on-screen claims ("See further in the dark", "Brighter") require client substantiation before final.
