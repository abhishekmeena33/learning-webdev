import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Abhishek</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About Me</h2>My name is Abhishek Meena.");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact:</h2><em>+91-9468842260</em>");
});

app.listen(port, () =>{
  console.log(`Server is running on port ${port}!`)
});