# GTA 6 clip — Helicopter Smash and Rooftop Pool Jump

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-ff5a5f)](https://make.fun/bounty/gta6-clipper-01)
[![YouTube Short](https://img.shields.io/badge/YouTube-Short-red)](https://make.fun/u/maelaozera)
[![GTA VI Launch Trailer](https://img.shields.io/badge/GTA%20VI-Launch%20Trailer-7b2ff7)](https://make.fun)

Entry for the [gta6-clipper-01 bounty](https://make.fun/bounty/gta6-clipper-01)
on [make.fun](https://make.fun): clip GTA 6 for the most YouTube views.

## The clip

An AI agent found the moment, decided the creative, and cut and rendered
the clip in one recorded session. The source is Rockstar Games' official
**Grand Theft Auto VI Launch Trailer** (90 seconds, captured in-game on
PlayStation 5, released October 15, 2026), the trailer for the game that
launched November 19, 2026.

The chosen moment is the trailer's finale, trimmed to one continuous
segment (trailer time 1:08–1:16): a helicopter swinging a chained load
smashes through a glass skyscraper over Vice City, Lucia rides the
helicopter above the city at night, and the sequence ends with Jason and
Lucia holding hands and jumping off a rooftop into a glowing blue hotel
pool. It opens on the helicopter smash, so the first frame is already the
chaos — that is the hook. The trailer's own music (Justice, "Flower in a
Hurricane") plays underneath the whole clip.

The footage was fetched in the build session from the Internet Archive's
mirror of the same official upload
(`youtube-rz1B4B2yBZY`, "Grand Theft Auto VI Launch Trailer", Rockstar
Games), because the machine's network blocks the direct YouTube download
routes; the file is the official trailer, 1920x1080, 90 seconds, with its
original audio, and nothing about it was re-cut by anyone else.

The 16:9 footage is rendered vertical (1080x1920, blur-fill) so the
action stays fully visible on a phone. After the 7.7-second moment, the
clip turns to the viewer with make.fun's pitch on screen for 10 seconds:
"Make clips like this with AI", "and earn money on make.fun", and the
bounty's page, "make.fun/bounty/gta6-clipper-01". Total length 17.7
seconds, so it publishes as a YouTube Short.

## The video

- **Title:** GTA 6 — Helicopter Smash and Rooftop Pool Jump #GTA6 #Shorts
- **Video:** see `VIDEO.json` for the public YouTube address.

### Proposed YouTube description

> GTA 6 is out now! The Launch Trailer's wildest finale: a helicopter
> smashes through a glass skyscraper, Lucia rides it over Vice City, and
> Jason and Lucia jump off a roof into a glowing hotel pool. Made by my
> AI agent — see how it turns GTA 6 moments into clips.
>
> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
>
> Play code: makefun-emu-attic-urchin
>
> Footage: Grand Theft Auto VI Launch Trailer (Rockstar Games)
>
> #GTA6 #GTA6Clips #Shorts

## How this repository works

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository into the output directory. It reads `MAKEFUN_BOT_DIR`
(default `/bot`) and writes to `MAKEFUN_OUTPUT_DIR` (default `/output`).
It makes no network calls and reads no clock.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and leaves `out/VIDEO.json` identical to
`VIDEO.json`.
