const fs = require("fs");

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello world");
});

server.listen(3000);

// fs.writeFile("hey.txt", "Hello world!", function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("done");
//   }
// });

// fs.readFile("hey.txt", "utf8", (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });

// fs.appendFile("hey.txt", "new text", function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("done");
//   }
// });

// fs.rename("hey.txt", "hello.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.copyFile("hello.txt", "./copy/copy.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.unlink("hello.txt", (err) => {
//   if (err) console.err(err);
//   else console.log("removed");
// });

// fs.rmdir("./copy", {recursive: true}, (err) => {
//   if (err) console.error(err.message);
//   else console.log("removed");
// });
