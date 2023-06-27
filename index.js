// import {Person} from "./person.js"

// const person = new Person("John Doe", 30)
// console.log(person.greeting())

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "content-type": "text/html" });
        res.write(content);
        res.end();
      }
    );
  }

  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "content-type": "text/html" });
        res.write(content);
        res.end();
      }
    );
  }

  if (req.url === "/api/users") {
    const users = [
      { name: "John Doe", age: 30 },
      { name: "Mike Lee", age: 40 },
    ];

    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  }

  //Build file path dynamically
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //get file extension
  let extName = path.extname(filePath);

  //Initial content-type
  let contentType = "text/html";

  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
  }

  //Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //404 Not Found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.write("Server Error", err.code);
        res.end();
      }
    } else {
      //Success
      res.writeHead(200, { "content-type": contentType });
      res.write(content, "utf8");
      res.end();
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("server running on port", PORT);
});
