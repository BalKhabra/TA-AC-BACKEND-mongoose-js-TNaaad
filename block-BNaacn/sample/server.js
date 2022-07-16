const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

mongoose.connect("mongodb://localhost/sample", {useNewURLParser: true, useUnifiedTopology: true}, (err) => {
  console.log(err ? err : "Connected to Database");
});

const app = express();

app.listen(3000, () => {
  console.log("server is listening on port 3k");
});