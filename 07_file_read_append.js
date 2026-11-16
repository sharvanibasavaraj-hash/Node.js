const fs = require("fs");

fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File Content:", data);
    }
});

fs.appendFile("sample.txt", "\nLearning File System Module", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data appended successfully");
    }
});