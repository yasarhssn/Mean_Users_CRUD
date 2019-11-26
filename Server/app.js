require('./config/config');
require('./models/db');
require('./models/User');

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

