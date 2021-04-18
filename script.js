"use strict";
const fs = require("fs");
const https = require("https");
const path = require("path");

https
  .get("https://jsonplaceholder.typicode.com/posts", (res) => {
    let posts = "";
    res.on("data", (data) => {
      posts += data;
    });
    res.on("end", () => {
      fs.writeFile(
        path.join(__dirname, "/result", "posts.json"),
        posts,
        (err) => {
          if (err) {
            throw err;
          }
          console.log("File written to....");
        }
      );
    });
  })
  .on("error", (error) => console.log(error));
