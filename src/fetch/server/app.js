const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// let id = 2
const info = [{ user: 1, pwd: 2, email: 3 }];

app.get('/api/info', (req, res) => {
  res.json(info);
});

app.post('/api/info', (req, res) => {
  const { user, pwd, email } = req.body;
  info.push({
    user: user,
    pwd: pwd,
    email: email,
  });
  return res.send('success');
});

app.listen(4000, () => {
  console.log('server running');
});
