const fs = require("fs");

console.log(global);

global.hello = () => {
  global.console.log("hello");
};

global.hello();
hello();

// Web에서는 Window 객체와 동일함.
