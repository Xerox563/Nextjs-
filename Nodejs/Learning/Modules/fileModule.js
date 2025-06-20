const fs = require("fs").promises;

// // asynchronous file read (Non Blocking Code)
// fs.readFile("my.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// // Synchronous file read (Blocking Code)
// fs.readFileSync("my.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// console.log("Reading file runs first !!");

// * Using the Promises / async-await
// Promise
fs.readFile(
  "my.txt",
  "utf-8,"(error, data).then((data) => console.log(data))
).catch((err) => console.log(err));

// async-await
async function readFiles() {
  try {
    console.log("Starting to read Files");
    const data1 = await fs.readFile("file1.txt", "utf - 8");
    const data2 = await fs.readFile("file2.txt", "utf-8");
    console.log("2- Files Read successfully !! ");
  } catch (err) {
    console.log("error reading files", err);
  }
}

// Node.js is fast and efficient because it uses a non-blocking event loop and delegates heavy work to the system.
// The Event Loop enables Nodejs to handle thousands of concureent connections with a single thread making it perfect for data streaming , chat application and Read time application
// This allows it to handle thousands of connections at the same time, with minimal resources.
// ejs is desiged for server side dev , while browsers are for client side dev.
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
