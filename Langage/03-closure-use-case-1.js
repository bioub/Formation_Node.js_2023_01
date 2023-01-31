// Question ?
// Comment réagit ce programme
// 1 - ..1s.. 0 ..1s.. 1 ..1s.. 2
// 2 - ..1s.. 0 1 2
// 3 - ..1s.. 3 3 3

// Réponse 3 : ..1s.. 3 3 3
// for (var i=0; i<3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// pile d'appel
// de fonction
// ^
// |
// |
// |                                                                                 lg lg lg
// |for { i=0 setTimeout, i=1 setTimeout, i=2 setTimeout } i=3                       => => =>
// +---------------------------------------------------------------------------------1s--------> temps
//                                                                                   3  3  3

// Réponse 1 : ..1s.. 0 ..1s.. 1 ..1s.. 2
// function mySetTimeout(cb, delayMs) {
//   // bloquer le thread pendant 1s
//   // IMPORTANT : A NE PAS FAIRE
//   const debut = Date.now(); // timestamp
//   while (debut + delayMs > Date.now());

//   cb();
// }

// for (var i=0; i<3; i++) {
//   mySetTimeout(() => {
//     console.log(i);
//   }, 1000);
// }


// pile d'appel
// de fonction
// ^
// |
// |
// |                               lg                           lg                           lg
// |for { i=0 setTimeout           =>, i=1 setTimeout           =>, i=2 setTimeout           => } i=3
// +-------------------------------1s---------------------------2s---------------------------3s----> temps
//                                 0                            1                            2

function createCallback(msg) {
  // closure (la portée dans laquelle est définie msg)
  // est une portée sauvegardée
  // le console.log affichera la valeur de msg de l'époque où
  // createCallback a été appelée
  return () => {
    console.log(msg);
  }
}

for (var i=0; i<3; i++) {
  setTimeout(createCallback(i), 1000);
}


// var ne créé pas de portée de block
// let et const créent une portée de block
// la closure est une portée, donc si une portée
// de block est créée on peut obtenir une closure


for (let i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
