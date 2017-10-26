const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller')

const app = express();
app.use( json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING).then(dbInstance => {   
    app.set('db', dbInstance);
    dbInstance.new_planes();
    })
    .catch(console.log);


app.get("/api/planes", controller.getplanes);














const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

