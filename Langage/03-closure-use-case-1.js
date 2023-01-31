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

function mySetTimeout(fct, delayMs) {
  // bloquer le thread pendant 1s
  // IMPORTANT : A NE PAS FAIRE
  const debut = Date.now(); // timestamp
  while (debut + delayMs > Date.now());

  fct();
}

for (var i=0; i<3; i++) {
  mySetTimeout(() => {
    console.log(i);
  }, 1000);
}


// pile d'appel
// de fonction
// ^
// |
// |
// |                               lg                           lg                           lg
// |for { i=0 setTimeout           =>, i=1 setTimeout           =>, i=2 setTimeout           => } i=3
// +-------------------------------1s---------------------------2s---------------------------3s----> temps
//                                 0                            1                            2
