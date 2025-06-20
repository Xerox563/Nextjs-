const fs = require("fs").promises;

const path = __dirname;
console.log(path);

// To read all the files insid ea folder
// fs.promises
//   .readdir(path)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Counting no. of file in a directory
// Way1
// async function countFiles() {
//   try {
//     const files = await fs.readdir(path);
//     console.table([files, files.length]);
//   } catch (err) {
//     console.log(err);
//   }
// }

// countFiles();

// Way2
// let res = 0;

// fs.readdir(path)
//   .then((files) => {
//     res = files.length;
//     console.log(`Number of files: ${res}`); // it runs with the async operations Sso it shows 0
//   })
//   .catch((err) => console.log("Error:", err));

// console.log(res); // it runs before the async operations completes so it shows 0
async function getfiles() {
  try {
    const files = await fs.readdir(path);
    console.log("Files ::", files);
    console.log("No. of Files in directory ::", files.length);
  } catch (err) {
    console.log(err);
  }
}

getfiles();

// All Operations with the help of async/Await
async function fileOperations() {
  try {
    // Write
    await fs.writeFile("data.txt", "Initial data");

    // Append
    await fs.appendFile("data.txt", "\nAppended line");

    // Read
    const content = await fs.readFile("data.txt", "utf-8");
    console.log("File content:\n", content);

    // Rename
    await fs.rename("data.txt", "data-renamed.txt");

    // Delete
    await fs.unlink("data-renamed.txt");
    console.log("All operations completed!");
  } catch (err) {
    console.error("Error:", err);
  }
}

fileOperations();
