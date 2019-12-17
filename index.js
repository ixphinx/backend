const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

//Database
const URI = 'mongodb+srv://admin:huevon33@database-aizqn.gcp.mongodb.net/jugadores?retryWrites=true&w=majority';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB conectada'))
    .catch(err => console.log(err));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'https://33league.000webhostapp.com'}));

//Routes
app.use(require('./routes/routes'));

//Server
app.listen(app.get('port'), ()=>{
    console.log('Serverd connected on pport ', app.get('port'));
});
