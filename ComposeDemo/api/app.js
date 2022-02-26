const express = require('express')
const app = express()
const port = 3000
const ip = require('ip');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/math/sum', (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    res.send({result:a + b, ip:ip.address()});
  })

app.listen(port, () => {
  console.log(`Math API listening on port ${port}`)
})