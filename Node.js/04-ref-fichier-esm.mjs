import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

// à faire dans chaque fichier
const __dirname = path.dirname(new URL(import.meta.url).pathname);


// Pour éviter que les chemins dépendent du CWD on
// peut utiliser __dirname avec path.join ou path.resolve
const prettierRcPath = path.join(__dirname, '.prettierrc'); // ou resolve au choix
const buffer = fs.readFile(prettierRcPath);
console.log(buffer.toString('utf-8'));

// Alternative moins connue
// déplacer le CWD pour le remettre à la racine du projet
process.chdir(__dirname);

const bufferAlt = fs.readFileSync('.prettierrc');
console.log(bufferAlt.toString('utf-8'));
