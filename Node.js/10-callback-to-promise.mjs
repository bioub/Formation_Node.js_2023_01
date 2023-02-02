// objectif : transformer un code basé sur des callbacks
// en version basée sur des promesses :

// basé sur des callbacks :
// setTimeout(() => {
//   console.log('1s')
// }, 1000);

// basé sur des promesses :
// timeout(1000).then(() => console.log('1s'));
// ou
// await timeout(1000);
// console.log('1s');


// Version 1
// utilisation du constructeur Promise :
// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// await timeout(1000);
// console.log('1s');

// Version 2
// utilisation de util.promisify
// import util from 'node:util';

// const timeout = util.promisify(setTimeout);

// await timeout(1000);
// console.log('1s');

// Version 3
// utilisation de node:timers/promises (Node 16+)
import { setTimeout } from 'node:timers/promises';

await setTimeout(1000);
console.log('1s');
