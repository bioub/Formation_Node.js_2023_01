import fs from 'node:fs/promises';

async function copy() {
  try {
    const buffer = await fs.readFile('.prettierrc');
    await fs.writeFile('.prettierrc.copy', buffer);
    console.log('Copy done');
  } catch (err) {
    console.log('Erreur : ' + err.message);
  }
}

copy();

// pile d'appel
// de fonction
// ^
// |
// |
// |readFile ..⟳..        writeFile ..⟳..          log
// +-----------------------------------------------------------------------------------------> temps
//                                                 Copy done
