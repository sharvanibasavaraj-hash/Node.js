const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    if (req.url === "/") {
        res.end(JSON.stringify({
            message: "Welcome to Node.js Server"
        }));
    } 
    else if (req.url === "/students") {
        res.end(JSON.stringify([
            { id: 1, name: "Rahul" },
            { id: 2, name: "Priya" }
        ]));
    } 
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: "Page not found"
        }));
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});