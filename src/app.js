const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    const query = "SELECT * FROM Table";
  
    res.send(query);
  });

app.post("/query", (req, res) => {
  const data = req.body;

  if (!data.query) {
    return res.send(400, "Missing query");
  }

  const query = data.query;

  res.send(query);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});