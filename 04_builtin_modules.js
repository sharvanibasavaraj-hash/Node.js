const os = require("os");
const path = require("path");

console.log("Operating System:", os.platform());
console.log("Architecture:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());

console.log("Current Directory:", __dirname);
console.log("File Name:", path.basename(__filename));
console.log("Joined Path:", path.join(__dirname, "data", "test.txt"));