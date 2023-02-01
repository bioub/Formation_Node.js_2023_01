import fs from 'node:fs';

// sync
// le + :
// facile à lire (les lignes s'enchainent)
// le - :
// tant que le fichier n'a pas été lu
// le thread reste bloqué sur l'appel à readFileSync
const buffer = fs.readFileSync('.prettierrc');
console.log(buffer.toString('utf-8'));

// async
// le + :
// performant, pendant que le fichier est en lecture
// le thread est disponible
// le - :
// plus difficile à lire (les lignes ne n'exécute pas dans l'ordre
// ici: 19, 22 puis plus tard 20 quand le fichier aura été lu)
fs.readFile('.prettierrc', (_, buffer) => {
  console.log(buffer.toString('utf-8'));
});
