// // File : index.js
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// // PORT
// const PORT = process.env.PORT || 4000;
// app.get("/", (req, res) => {
//   res.json({ message: "API Working" });
// });
// app.listen(PORT, (req, res) => {
//   console.log(`Server Started at PORT ${PORT}`);
// });
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});