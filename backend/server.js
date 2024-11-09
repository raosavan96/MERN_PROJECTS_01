const express = require("express");
const mongoose = require("mongoose");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static("./public"));
const routerApi = require("./router/api");
const e = require("express");

mongoose
  .connect(
    "mongodb+srv://savanyadav377:mpL6zXCnpk6b3lP9@cluster1.n6tmj.mongodb.net/userinfo?retryWrites=true&w=majority&appName=Cluster1"
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
