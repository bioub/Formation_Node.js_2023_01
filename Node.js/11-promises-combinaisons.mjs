import { setTimeout } from 'node:timers/promises';

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const rand1 = getRandomInt(1000, 2000);
const val1 = await setTimeout(rand1, rand1);
console.log(val1 + 'ms');

const rand2 = getRandomInt(500, 1000);
const val2 = await setTimeout(rand2, rand2);
console.log(val2 + 'ms');

// Pour paralléliser des promesses, 4 méthodes

// Promise.all
// on démarre les opérations async en même temps
// et l'ensemble se termine quand la dernière opération se termine
// si une erreur se produit l'ensemble échoue
// ex : dans le build, on lit les 2 fichiers, si une erreur on stop le build

// Promise.race
// on démarre les opérations async en même temps
// et l'ensemble se termine quand la première opération se termine
// si le premier retour async est une erreur l'ensemble échoue
// ex : lire un fichier avec un temps maximum (avec un timeout)

// Promise.allSettled
// on démarre les opérations async en même temps
// et l'ensemble se termine quand la dernière opération se termine
// si une erreur se produit on récupère chaque résultat soit succes soit erreur
// ex : sur une page web j'envoie plusieurs requête dont les résultats s'affiche dans des composant différents
// si erreur on veut quand afficher partiellement la page

// Promise.any
// on démarre les opérations async en même temps
// et l'ensemble se termine quand la première opération se termine
// si le premier retour async est une erreur on attend le suivant
// si toutes les opérations sont en erreur l'ensemble échoue
// ex : j'ai plusieurs serveurs mirroirs, je veux interroger le plus rapide
// je veux connaitre le serveur le plus rapide qui n'est pas en erreur
