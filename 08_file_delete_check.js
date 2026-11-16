const fs = require("fs");

const file = "sample.txt";

if (fs.existsSync(file)) {
    console.log("File exists");

    fs.unlink(file, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File deleted successfully");
        }
    });
} else {
    console.log("File does not exist");
}