/* 
File System Module 

* Node.js caches modules after the first time they are loaded. This means that subsequent require() calls return the cached version.

Module Resolution
When you require a module, Node.js looks for it in this order:
1.Core Node.js modules (like fs, http)
2.Node modules in node_modules folders
3.Local files (using ./ or ../ prefix)


->  The fs (File System) module in Node.js allows you to interact with the file system — read, write, delete, append, and more.

:: Synchronous (fs.writeFileSync)
Blocks the program until the file task is complete.
Simple, but slows everything else down.
Not good for servers or large apps.

Methods :: writeFile , readFile,appendFile,unlink


:: Asynchronous (fs.writeFile)
Starts the task and continues with other code immediately.
File task happens in the background.
Better for performance, especially in web servers.
*/

const fs = require("fs");

// Synchronous (Blocking)
// fs.writeFileSync(
//   "virus.txt",
//   "Virus for the injecting the malware in the WiFi"
// );

// fs.appendFileSync(
//   "virus.txt",
//   " It  uses burpsuite and the wireshark (Synchronous)"
// );
// const text1 = fs.readFileSync("virus.txt", "utf-8");
// console.log(text1);

// fs.renameSync("virus.txt", "payload.txt", (err) => {
//   if (err) {
//     console.error("Error renaming file:", err);
//     return;
//   }
//   console.log("File renamed successfully (async)");
// });

// Updating Content of file
try {
  const data = fs.readFileSync("payload.txt", "utf-8");
  const updateData = data.replace(data, "Welcome to Metasploit FrameWork !! ");
  fs.writeFileSync("payload.txt", updateData);

  const d = fs.readFileSync("payload.txt", "utf-8");
  console.log(d);
} catch (err) {
  console.error("Error:", err);
}

// // fs.unlinkSync("virus.txt");

// // Asynchronous (Non Blocking)
// fs.writeFile("virus.txt", "Virus for the injecting the malware in the WiFi");

// fs.appendFile(
//   "virus.txt",
//   " It  uses burpsuite and the wireshark (Asynchronous)"
// );
// const text2 = fs.readFile("virus.txt", "utf-8");
// console.log(text2);

// const newName = "malware.txt";
// const pPath = __dirname;
// const uPath = path.join(__dirname, newName);
// fs.rename(pPath, uPath);

// fs.unline("virus.txt");
