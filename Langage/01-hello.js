const names = ['Charline', 'Florian', 'Romain'];

/** @param {string} name */
function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

for (const n of names) {
  console.time('hello');
  console.log(hello(n));
  console.timeEnd('hello');
}
