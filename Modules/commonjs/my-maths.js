// Node ajoute une fonction autour de nos fichiers
// donc les variables et fonctions sont locale au fichier
// j'ai une portée au niveau du fichier
// function(exports, require) {

  function sum(a, b) {
    return a + b;
  }

  function substract(a, b) {
    return a - b;
  }

  exports.sum = sum;
  exports.substract = substract;

// }
