// function(exports, require, module, __filename, __dirname) {
  const fs = require('node:fs');
  const path = require('node:path');
  const process = require('node:process');

  // Pour éviter que les chemins dépendent du CWD on
  // peut utiliser __dirname avec path.join ou path.resolve
  const prettierRcPath = path.join(__dirname, '.prettierrc'); // ou resolve au choix
  const buffer = fs.readFileSync(prettierRcPath);
  console.log(buffer.toString('utf-8'));

  // Alternative moins connue
  // déplacer le CWD pour le remettre à la racine du projet
  process.chdir(__dirname);

  const bufferAlt = fs.readFileSync('.prettierrc');
  console.log(bufferAlt.toString('utf-8'));
// }
