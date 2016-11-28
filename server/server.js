import express from 'express'
import cors from 'cors'
//import path from 'path'
import bodyParser from 'body-parser' 
//import  * as routes from './routes/'   
import  routesindex from './routes/index'   
import  routesusers from './routes/users'    

//import logger from './logger'  
import jwt from 'jsonwebtoken' 
import config from '../config/config.json' 
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
/*
* Routes 
*/ 
app.use('/', routesindex);
app.use('/users', routesusers);

 
/*
* Cors
*/
app.use(cors());


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




app.listen(config.port, (err) => {
	if(err)  throw err;

	console.log(`Server Run with port:  ${config.port}`)

});