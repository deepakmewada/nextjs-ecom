const express = require('express');
// const connection = require('./database');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [
  {
    name:"Deepak Mewada"
  },
  {
    name:"Bhavesh Mewada"
  },
  {
    name:"Ronak Mewada"
  }
];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user::::::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});