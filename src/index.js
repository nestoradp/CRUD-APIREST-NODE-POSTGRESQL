const express = require('express');
const app = express();


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extends:false}));


//Route
app.use(require('./routes/index'));




app.listen(3000);
console.log('Server Iniciado en puerto' + 3000);