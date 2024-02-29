import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Welcome@123!!',
  database: 'gnie',
});

app.get('/api/', (req, res) => {
  res.json('hello this is the backend');
});

app.get('/api/instances', (req, res) => {
  const q = 'SELECT * FROM instances ORDER BY title';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/api/instances', (req, res) => {
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

app.delete('/api/instances/:id', (req, res) => {
  const instanceId = req.params.id;
  const q = 'DELETE FROM instances WHERE id = ?';

  db.query(q, [instanceId], (err, data) => {
    if (err) return res.json(err);
    return res.json('Instance has been deleted!');
  });
});

app.put('/api/instances/:id', (req, res) => {
  const instanceId = req.params.id;
  const q =
    'UPDATE instances SET `title` = ?, `prodURL` = ?, `prodAdmin` = ?, `qaURL` = ?, `qaAdmin` = ?, `image` = ? WHERE id = ?';

  const values = [
    req.body.title,
    req.body.prodURL,
    req.body.prodAdmin,
    req.body.qaURL,
    req.body.qaAdmin,
    req.body.image,
  ];

  db.query(q, [...values, instanceId], (err, data) => {
    if (err) return res.json(err);
    return res.json('Instance has been updated!');
  });
});

app.listen(8800, () => {
  console.log('Connected to backend!');
});
