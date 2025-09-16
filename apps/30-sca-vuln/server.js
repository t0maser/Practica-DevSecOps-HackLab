const express = require('express');
const _ = require('lodash');
const app = express();
app.get('/', (_,res)=>res.send('SCA vulnerable app (old deps)'));
app.listen(3000, ()=>console.log('sca-vuln on 3000'));
