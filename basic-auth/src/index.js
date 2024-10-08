const express = require("express");

const routes = require("./routes");

require("./db");

const app = express();

app.use(routes);

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
