const fs = require("fs");

const student = {
    id: 101,
    name: "Rahul",
    department: "CSE",
    year: 2
};

const jsonData = JSON.stringify(student, null, 2);

fs.writeFileSync("student.json", jsonData);

const data = fs.readFileSync("student.json", "utf8");

const parsedData = JSON.parse(data);

console.log("Student Details:");
console.log(parsedData);
console.log("Name:", parsedData.name);