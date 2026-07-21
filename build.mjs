import { cp, rm, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
const source = new URL("./site/", import.meta.url);
const output = new URL("./dist/", import.meta.url);
if (existsSync(output)) await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
console.log("KSBA website build complete: dist/");
