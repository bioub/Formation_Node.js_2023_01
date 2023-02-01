import process from 'node:process';

// si le programme se lance avec la commande :
// node 01-process.mjs --name Romain
// [
//   '/Users/romain/.nvm/versions/node/v16.16.0/bin/node',
//   '/Users/romain/Desktop/Formation/Node.js/01-process.mjs',
//   '--name',
//   'Romain'
// ]
console.log(process.argv);

// plutôt que process.args, utiliser des bibliothèques comme :
// yargs, minimist, meow, commander

// Current Working Dir
// le dossier dans lequel on se trouve dans le terminal
console.log(process.cwd());
// déplacer le cwd, en gros faire un cd autre-dossier  :
// process.chdir('autre-dossier')

// Variables d'environnement
console.log(process.env.PATH.split(':'));

// souvent dans une application Node une variable NODE_ENV
// est définie (avec la valeur development ou production)
console.log(process.env.NODE_ENV ?? 'development');


// process.exit(0); // kill le programme (0 veut dire tout s'est bien passé, sinon
// une erreur s'est produire)

console.log(process.platform); // win32 (Windows), linux, darwin (macOS)

// stats
// process.cpuUsage();
// process.memoryUsage();
// process.uptime();
