import readline from 'readline';
import { getRandomInt } from './random.js';

export default class Jeu {
  /**
   * @param {object} options
   * @param {number} options.min
   * @param {number} options.max
   */
  constructor(options) {
    // ES2020 : Optional Chaining ?, Nullish Coalescing Operator ??
    const min = options?.min ?? 0;
    const max = options?.max ?? 100;
    this.rl = readline.createInterface({
      input: process.stdin, // lit la ligne sur le clavier
      output: process.stdout, // affiche les questions dans le terminal
    });
    this.entierAlea = getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez saisi : ' + this.essais.join(' - '));
    }
    // pose la question (asynchrone)
    this.rl.question('Quel est le nombre ? ', (answer) => {
      console.log('Vous avez saisi : ' + answer);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        // Fast Fail
        console.log('Erreur : Vous devez saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

