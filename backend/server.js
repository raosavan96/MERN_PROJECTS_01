const express = require("express");
const mongoose = require("mongoose");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static("./public"));
const routerApi = require("./router/api");

mongoose
  .connect(
    "mongodb+srv://savanyadav377:2tM7FEXCIuVnJDxB@mernprojectone.lxorn.mongodb.net/mern_project_01?retryWrites=true&w=majority&appName=MernProjectOne"
  )
  .then(() => {
    console.log("Successfully connected DB...");
  })
  .catch((error) => console.log(error));

server.use("/api", routerApi);

const port = 5000;
server.listen(port, () => {
  console.log(`http://localhost:${port}/api/`);
});
