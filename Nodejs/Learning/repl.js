// REPL -> Read Eval Print Loop -> Interactive shell where you can execute the js code line by line
// -> IT opens qhen we hit node in the terminal
/*
 -> Read - REPL reads the user inout and parse it into a ds so that the js engine can understand .
 -> Evalute - the Parsed input is evaluated by the js engine , if its valid it compoutes the result.
 -> Print - the evaluated result is printed back to the console .
 -> Loop - The Process loops back waiting for the next input and conintues until the user exits

 * Global in Nodejs / Window in JS
 In nodejs theres no window or document because nodej sruns outside the browser , it doesnt deal with the dom .
 Instead Nodejs has global object
 globalThis -> Provides a standard way to access global object in any js enviornment.
 React is all about ur componenent while Node is all about ur Modules 
 -> Nodejs used commonJs Module
 */

const add = (a, b) => {
  return a + b;
};

const multiple = (x, multiplier) => {
  return x * multiplier;
};

const square = (y) => {
  return y * y;
};

module.exports = { add, multiple };
module.exports.square = square;
