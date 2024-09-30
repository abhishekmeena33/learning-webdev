import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const headHTML = "<h1>Enter your name below👇🏻</h1>"
  res.render("index.ejs",{"heading": headHTML});
});

app.post("/submit", (req, res) => {
  const headHTML = "<h1>There are " + `${req.body["fName"].length + req.body["lName"].length}` + " letters in your name.</h1>"
  
  //console.log(fName + lName + "0");
  res.render("index.ejs", {
    "heading": headHTML,
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
