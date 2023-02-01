// JS regorge d'objets globaux (dépend de la plateforme)

console.log(typeof Math); // object du langage (sur toutes les plateformes)
console.log(typeof process); // object de Node.js
console.log(typeof console); // object de Node.js et du navigateur
console.log(typeof document); // object du navigateur (dans node === undefined)

// l'objet JS est un système clé valeur extensible

console.log(typeof Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// on peut supprimer des clés/valeurs avec delete
delete Math.sum;
console.log(typeof Math.sum); // undefined

// MAUVAISE PRATIQUE D'ETENDRE DES OBJETS QU ON A PAS CREE

// Pour créer des objets on peut
// le créer directement avec la syntaxe object literal
// si l'objet est simple à créer
// s'il est instancié plusieurs fois, ne pas mettre de méthodes

const coords = {
  x: 1,
  y: 2,
};

// Ou le créer via une fonction constructeur

// Syntaxe historique :
// function Contact(name) {
//   this.name = name;
// }

// Contact.prototype.hello = function() {
//   return `Hello ${this.name}`;
// };

class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello ${this.name}`;
  }
}

const romain = new Contact('Romain');
console.log(romain.hello());

console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

