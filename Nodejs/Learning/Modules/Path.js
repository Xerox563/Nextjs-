const path = require("path");

const fullPath = path.join(__dirname, "folder", "amit.txt");

// returns the file name from the path (path.basename)
const bn = path.basename("./user/docs/empty.txt");
const bn2 = path.basename("./user/docs/empty.txt", ".txt");

// parse -> parses a file path in an object
const parsed = path.parse("./user/docs/hack/virus.txt");
const x = path.extname(__dirname);
console.log(x);
// console.table([fullPath,bn,bn2,parsed])

// const parsede = path.parse(__dirname);
// console.log(parsede);
