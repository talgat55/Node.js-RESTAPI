import express from 'express'
//import path from 'path'
import bodyParser from 'body-parser' 
import routes from './routes/*'   
import logger from './logger' 
import mongoose from 'mongoose' 
import jwt from 'jsonwebtoken' 
import config from '../config/config' 
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable
 

app.use('/', routes);

 

/*
app.use((req, res, next) => {
    res.status(404).sendFile(process.cwd() + '/app/views/404.htm');
});
*/

// Errors

if (config.debug_mode) {
    // development error handler
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.end( err.message );
    });
} else {

    // production error handler
    // no stacktraces leaked to user
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render( "Somethink wrong" );
    });
}




app.listen(config.port);