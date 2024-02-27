import express from 'express';
import mysql from 'mysql';

const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Welcome@123!!',
  database: 'gnie',
});

app.get('/', (req, res) => {
  res.json('hello this is the backend');
});

app.get('/instances', (req, res) => {
  const q = 'SELECT * FROM instances';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/instances', (req, res) => {
  const q =
    'INSERT INTO instances (`title`, `prodURL`, `prodAdmin`, `qaURL`, `qaAdmin`,  `image`) VALUES (?)';
  const values = [
    req.body.title,
    req.body.prodURL,
    req.body.prodAdmin,
    req.body.qaURL,
    req.body.qaAdmin,
    req.body.image,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('Instance has been created successfully.');
  });
});

app.listen(8800, () => {
  console.log('Connected to backend!');
});
