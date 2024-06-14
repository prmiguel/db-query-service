const express = require("express");
const app = express();
const dbConnection = require("./connection");

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  const table = req.headers.table;
  const field = req.query.field;
  const value = req.query.value;
  dbConnection
    .HR()
    .queryBuilder()
    .select()
    .from(table)
    .where(field, value)
    .then((result) => {
      res.send(result);
    });
});

app.post("/query", (req, res) => {
  const data = req.body;

  if (!data.query) {
    return res.send(400, "Missing query");
  }

  const query = data.query;

  res.send(query);
});

app.get("/data", (req, res) => {
  const query = 'SELECT * FROM "public"."countries" LIMIT 100';
  dbConnection
    .HR()
    .raw(query)
    .then((result) => {
      res.send(result);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});