//alexander maat
//section 001 group 14
//this created 2 routs in express

let express = require("express");

let app = express();

app.get("/", (req, res) => res.send("This is my first node application"));
app.get("/help", (req, res) => res.send("Please contact tech support"));

app.listen(3000, () => console.log("Server is runnning"));
