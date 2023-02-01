import fs from 'node:fs/promises';

// fs.readFile('.prettierrc')
//   .then((buffer) => {
//     fs.writeFile('.prettierrc.copy', buffer)
//       .then(() => console.log('Copy done'))
//       .catch((err) => console.log('Erreur : ' + err.message))
//   })
//   .catch((err) => console.log('Erreur : ' + err.message))

// pour éviter le callback hell :
fs.readFile('.prettierrc')
  .then((buffer) => {
    return fs.writeFile('.prettierrc.copy', buffer);
  })
  .then(() => console.log('Copy done'))
  .catch((err) => console.log('Erreur : ' + err.message));

// en plus court (le retour d'une fonction fléché est ce qui suit la flèche) :
fs.readFile('.prettierrc')
  .then((buffer) => fs.writeFile('.prettierrc.copy', buffer))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log('Erreur : ' + err.message));
