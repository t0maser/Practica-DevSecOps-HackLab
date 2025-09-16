require('dotenv').config();
const express = require('express');
const app = express();

// Secreto hardcodeado a propósito (¡NO HACER EN PRODUCCIÓN!)
const hardSecret = "sk_live_FAKE_fake_fake";

app.get('/leak', (req, res) => {
  res.json({
    envAccessKey: process.env.AWS_ACCESS_KEY_ID || null,
    hardSecret
  });
});

app.get('/', (_,res)=>res.send('This app leaks secrets on purpose.'));

app.listen(3000, ()=>console.log('secrets-leak on 3000'));
