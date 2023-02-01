setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// 1 - B E A D C
// 2 - A B C D E
// 3 - E B A D C

// pile d'appel
// de fonction
// ^
// |
// |
// |                                                                lg                   lg  lg                   lg
// |setTimeout - setTimeout - setTimeout - setTimeout - lg ..⟳..    cbB ..⟳..            cbA cbD ..⟳..            cbC
// +-------------0--------------------------------------------------7--------------------500--502----------------------------> temps
//                                                      E           B                    A   D                    C


// file d'attente de timer (0ms) : cbB


// coté C++ dans Node.js (Event Loop)
// do {
//   runJS();
// } while(thereIsCallbackInQueue());
