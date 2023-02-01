// function(exports, require, module) {

  /** @param {string} name */
  function hello(name) {
    return `Hello ${name.toUpperCase()}`;
  }


  // on remplace exports par la fonction hello :
  module.exports = hello;


// }
