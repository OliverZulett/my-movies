const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./src/models/users');

const app = express();
app.use(cors());
app.use(express.json())

const port = 6060;

const mongoUrl = 'mongodb://admin:password123@localhost:27017';
mongoose.connect(mongoUrl);

mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});

mongoose.connection.on('error', err => {
  console.error('error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send('hola');
});

app.post('/users', async (req, res) => {
  console.log(req.body);
  
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log('server running');
})