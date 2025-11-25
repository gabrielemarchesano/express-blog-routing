const express = require ("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in the port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Blog routing");
})