// function(exports, require) {

  const chalk = require('chalk'); // soit dans Node.js (ex: readline) soit installé via npm
  const hello = require('./hello'); // ./ ou ../ fichier local
  const MyMaths = require('./my-maths')

  console.log(MyMaths.sum(1, 2));

  console.log(chalk.underline.green(hello('Romain')));


// }
