import fs from 'node:fs/promises';

// top level await (ES2022)
// permet d'utiliser await sans fonction async
// ne fonctionne que avec les modules ESM

try {
  const buffer = await fs.readFile('.prettierrc');
  await fs.writeFile('.prettierrc.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log('Erreur : ' + err.message);
}
