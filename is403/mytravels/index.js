const express = require("express");

let app = express();

let path = require("path");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "bucket_list",
    port: 5432,
  },
});

//route, needs two things, request object and response

app.get("/", (req, res) => {
  knex
    .select()
    .from("country")
    .then((country) => {
      // respond with html and data
      res.render("displayCountry", { myCountry: country });
    });
});

app.listen(port, () => console.log("Listening"));
