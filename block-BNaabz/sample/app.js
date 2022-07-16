const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
//connect to mongoos data base
mongoose.connect("mongodb://localhost:27017", (err) => {
    console.log(err ? err : "connected true");
});
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000, () => {
  console.log("server is listening on port 3k");
});
