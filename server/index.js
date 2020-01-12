const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser());
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.body);
  res.end();
})


app.listen(3000, () => console.log('server is up on port 3000'));
