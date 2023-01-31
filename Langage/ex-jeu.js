// importe l'API readline de Node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, // lit la ligne sur le clavier
  output: process.stdout, // affiche les questions dans le terminal
});

function jouer() {
  // pose la question (asynchrone)
  rl.question('Quel est le nombre ? ', (answer) => {

    console.log('Vous avez saisi : ' + answer);

    // pour rejouer
    jouer();

    // pour quitter (s'il le nombre a été trouvé)
    // rl.close();
  });
}

jouer();
