const os = require("os");
console.table([
  os.platform(),
  os.totalmem(),
  os.freemem(),
  os.arch(),
  os.hostname(),
  os.type(),
]);

//The os module in Node.js is a built-in core module that provides operating system-related utility methods and properties.
// It helps you get details like CPU info, memory usage, platform type, etc.
