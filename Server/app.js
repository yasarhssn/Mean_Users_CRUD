require('./config/config');
require('./models/db');
require('./models/User');

var path = require('path');

const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');

const indexRoutes = require('./routes/index.routes');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api',indexRoutes);
//start-server
app.listen(process.env.PORT,()=> console.log(`server started at running at port: + ${process.env.PORT}`));

//create link to angular build directory

//var distDir = __dirname + "/dist/";
app.use(express.static(path.join(__dirname + '/public')));


app.get("*",(req,res)=>
{
    console.log('gett');
    res.sendFile(path.join(__dirname + '/public/index.html'));

});



