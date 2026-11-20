// main.ts — entrypoint for the gta6-clipper-01 bounty.
//
// The entry is a YouTube video: VIDEO.json at the repository root holds its
// address. This program copies that file into the output directory so the
// grader can read it. It does nothing else: no network, no clock, and no
// files outside the repository are touched.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

if (!existsSync(source)) {
  // The repository must hold VIDEO.json at its root; without it there is
  // no video to hand in, so fail loudly instead of writing an empty output.
  throw new Error(`VIDEO.json not found in bot directory: ${source}`);
}

// copyFileSync copies byte for byte, so the graded VIDEO.json is exactly
// the one this repository ships.
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
