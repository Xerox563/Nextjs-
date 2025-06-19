const fs = require("fs");

// asynchronous file read (Non Blocking Code)
fs.readFile("my.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Synchronous file read (Blocking Code)
fs.readFileSync("my.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("Reading file runs first !!");

// Nodejs is desiged for server side dev , while browsers are for client side dev.
// It has full access to the file system and network
// V8 is the googles open source js engine used by the chrome and the nodejs.
/* 
-> JIT compilation - Converts the js code into optimized machine code instead of interpreting it .
-> Prevents memory leaks and opptimizae performnace , 
-> Helps Nodejs to access the OS and file functionality .

Note: Node.js may not be the best choice for CPU-intensive tasks as they can block the event loop. For such cases, consider:
Using worker threads
Creating a microservice in a more suitable language
Using native add-ons
*/
