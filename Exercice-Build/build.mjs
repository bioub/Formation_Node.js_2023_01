import fs from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { createHash } from "node:crypto";
import { minify } from "terser";
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2))
const __dirname = dirname(new URL(import.meta.url).pathname);

const distPath = resolve(__dirname, "dist");
const srcPath = resolve(__dirname, "src");
const horlogeJsPath = resolve(srcPath, "js", "horloge.js");
const indexJsPath = resolve(srcPath, "js", "index.js");
const indexHtmlPath = resolve(srcPath, "index.html");
const indexHtmlDistPath = resolve(distPath, "index.html");
const appJsDistPath = resolve(distPath, "app.js");

async function rmAndMkdir(distPath) {
  await fs.rm(distPath, { recursive: true, force: true });
  await fs.mkdir(distPath);
}

async function buildJs() {
  const bufferHorloge = await fs.readFile(horlogeJsPath);
  const bufferIndex = await fs.readFile(indexJsPath);

  let bufferOrStr = Buffer.concat([bufferHorloge, bufferIndex]);

  if (argv.minify) {
    const { code } = await minify(bufferOrStr.toString('utf-8'));
    bufferOrStr = code;
  }

  if (argv.hash) {
    const hash = createHash('md5')
    const checksumMd5 = hash.update(bufferOrStr).digest('hex');

    await fs.writeFile(appJsDistPath.replace('app', 'app.'+checksumMd5), bufferOrStr);

    return checksumMd5;
  }

  await fs.writeFile(appJsDistPath, bufferOrStr);
}

async function buildHtml(checksumMd5) {
  let content = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });

  const filename = checksumMd5 ? `app.${checksumMd5}.js` : 'app.js';

  content = content
    .replace(
      '<script src="./js/horloge.js"></script>',
      `<script src="./${filename}"></script>`
    )
    .replace('<script src="./js/index.js"></script>', "");

  await fs.writeFile(indexHtmlDistPath, content);
}

await rmAndMkdir(distPath);
const checksumMd5 = await buildJs();
await buildHtml(checksumMd5);
