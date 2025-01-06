const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

const port = 6060;

app.get('/', (req, res) => {
  res.send('hola');
});

app.listen(port, () => {
  console.log('server running');
})