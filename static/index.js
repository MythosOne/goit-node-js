// const path = require('path');
const express = require("express");

const app = express();

app.use(express.static("public"));

// const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
