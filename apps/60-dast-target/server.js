const express = require('express');
const app = express();

// No Helmet, sin cabeceras de seguridad
app.get('/echo', (req,res)=>{
  // refleja el parámetro sin sanitizar (para que ZAP lo note)
  const q = req.query.q || 'hello';
  res.send(`Echo: ${q}`);
});

app.get('/', (_,res)=>res.send('DAST target without security headers'));
app.listen(3000, ()=>console.log('dast-target on 3000'));
