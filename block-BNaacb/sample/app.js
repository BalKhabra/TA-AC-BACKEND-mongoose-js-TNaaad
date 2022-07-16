const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})

//mongoose
mongoose.connect("mongodb://localhost/sample", (err) => {
    console.log(err ? err : "Connected to database");
})

app.listen(3000, () => {
  console.log("server is listening on port 3k");
});