const express = require("express");

const server = express(); // creating an instance of an express server

server.get("/", (req, res) => {
  res.status(200).json({ hello: "Web 23" });
});

server.get("api/", (req, res) => {
  res.status(200).json({ hello: "this is api" });
});

const port = process.env.PORT || 4000;

console.log(process.env.PORT);

server.listen(port, () => {
  console.log(`\n Server running on port ${port} \n`);
});
