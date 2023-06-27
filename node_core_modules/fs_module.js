const fs = require("fs");
const path = require("path");

//Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
  if (err) throw err;
  console.log("Folder created");
});

//Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "Hello.txt"),
  "Hello World",
  function (err) {
    if (err) throw err;
    console.log("File written");

    //Append text to a file
    fs.appendFile(
      path.join(__dirname, "/test", "Hello.txt"),
      "This is node Crash Course",
      function (err) {
        if (err) throw err;
        console.log("File appended");
      }
    );
  }
);


//Read file 
fs.readFile(path.join(__dirname, "/test","hello.txt"), "utf8", function (err,data) {
    if (err) throw err;
    console.log(data);
  });

  //rename a file
  fs.rename(path.join(__dirname,"/test","hello.txt"), 
  path.join(__dirname,"/test","NewName.txt"), (err) => {
    if(err) throw(err)
    console.log("file renamed")
  })