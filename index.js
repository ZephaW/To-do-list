const express = require('express');
const app = express();

app.use("/static", express.static("public"));


app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('todo.ejs');
}); 

app.listen(4000, () => {
  console.log("Server is running");
});

