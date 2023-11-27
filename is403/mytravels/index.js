const express = require("express");

let app = express();

let path = require("path");

const poet = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const knex = require("knex")({
  client: "pg",
  connection: {
    host: localhost,
    user: "postgres",
    password: "admin",
    database: "bucket_list",
    port: 5432,
  },
});

app.listen(port, () => console.log("Listening"));
