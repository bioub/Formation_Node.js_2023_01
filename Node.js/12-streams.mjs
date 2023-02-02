import fs from 'node:fs';
import zlib from 'node:zlib'

fs.createReadStream('.prettierrc')
  .pipe(fs.createWriteStream('.prettierrc.copy'));


fs.createReadStream('.prettierrc')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('.prettierrc.zip'));
