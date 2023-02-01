function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// importe l'API readline de Node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, // lit la ligne sur le clavier
  output: process.stdout, // affiche les questions dans le terminal
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez saisi : ' + essais.join(' - '));
  }
  // pose la question (asynchrone)
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      // Fast Fail
      console.log('Erreur : Vous devez saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer();


// pile d'appel
// de fonction
// ^
// |                                         question                       question
// |question                                 jouer                          jouer
// |jouer    ..⟳..                           =>       ..⟳..                 =>
// +-----------------------------------------ENTREE-------------------------ENTREE----------------------------------> temps
//
