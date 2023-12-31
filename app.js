const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "src/dist")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
