import { cp, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(projectRoot, "dist", "public");
const target = path.join(projectRoot, "dist-cpanel");

await rm(target, { recursive: true, force: true });
await cp(source, target, { recursive: true });

console.log(`Pasta pronta para o cPanel: ${path.relative(projectRoot, target)}`);
console.log("O vídeo local está incluído em dist-cpanel/video-aulas-praticas.mp4");