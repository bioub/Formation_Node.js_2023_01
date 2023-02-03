import express from 'express';

const app = express();

// active body-parser json globalement
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Home' });
});

app.get('/hello/:name', (req, res) => {
  res.json({ msg: 'Hello ' + req.params.name });
});

app.post('/user', express.json(), (req, res) => {
  const user = req.body;
  console.log(user);
  res.json(user);
})

app.listen(4000, () => {
  console.log('server started');
});
