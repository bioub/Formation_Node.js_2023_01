globalThis.globalVar = 'globalVar';
const moduleVar = 'moduleVar'; // portée du fichier

function externe() {
  const closureVar = 'closureVar'; // portée d'une fonction parent
  function interne() {
    const localVar = 'localVar';
    if (true) {
      const blockVar = 'blockVar';
      console.log(blockVar);
      console.log(localVar);
      console.log(closureVar);
      console.log(moduleVar);
      console.log(globalVar);
    }
    // console.log(typeof blockVar); // undefined
  }

  interne();
  // console.log(typeof externe); // function
  // console.log(typeof interne); // function
}

externe();

// console.log(typeof externe); // function
// console.log(typeof interne); // undefined
