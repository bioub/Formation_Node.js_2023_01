const names = ['Charline', 'Florian', 'Romain'];

/** @param {string} name */
function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

names.forEach((n) => {
  console.log(hello(n));
});

// pile d'appel
// de fonction
// ^
// |
// |                       lg                   lg                 lg
// |for { i=0,el=Charline  => ; i=1,el=Florian  =>; i=2,el=Romain  => }
// |forEach
// +-----------------------------------------------------------------------------------------> temps
//                         CHARLINE             FLORIAN            ROMAIN

// Callback synchrone (appelée tout de suite)
// appelée par la fonction à laquelle vous l'avez passé (ici forEach)


// Meme fonction que mySetTimeout sans callback
// -> plus simple
// -> donc pas d'intéret d'avoir un callback
// -> donc si callback -> probablement async (9 fois sur 10)

function pause(delayMs) {
  // bloquer le thread pendant 1s
  // IMPORTANT : A NE PAS FAIRE
  const debut = Date.now(); // timestamp
  while (debut + delayMs > Date.now());
}

for (var i=0; i<3; i++) {
  pause(1000);
  console.log(i);
}
