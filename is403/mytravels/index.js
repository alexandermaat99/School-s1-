const express = require("express");

let app = express();

let path = require("path");

const poet = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
