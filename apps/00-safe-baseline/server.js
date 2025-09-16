const express = require('express');
const app = express();
app.get('/healthz', (_,res)=>res.send('ok'));
app.get('/', (_,res)=>res.send('Hello DevSecOps!'));
app.listen(3000, ()=>console.log('up on 3000'));
