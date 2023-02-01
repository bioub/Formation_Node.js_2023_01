import hello from './hello.js'; // ./ ou ../ fichier local
import { sum } from './my-maths.js';
import chalk from 'chalk';

console.log(sum(1, 2));

console.log(chalk.green(hello('Romain')));
