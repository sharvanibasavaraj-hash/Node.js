const fs = require("fs");

fs.writeFile("sample.txt", "Welcome to Node.js!", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created and data written");
    }
});