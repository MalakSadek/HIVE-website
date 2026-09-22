import fs from "fs";
import path from "path";

const IMAGE_EXT = /\.(avif|gif|jpe?g|png|webp)$/i;

export function getCarouselImages(): string[] {
  const dir = path.join(process.cwd(), "public/img/carousel");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => `/img/carousel/${encodeURIComponent(file)}`);
}
