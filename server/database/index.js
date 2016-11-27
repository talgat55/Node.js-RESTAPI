//import config from  './../../../config/config.js'
 

let config = require(process.cwd() + '/config/config.json');
import Mongoose from 'mongoose' 


Mongoose.connect(config.database, (err) => {
  if(err) {
    console.log('connection error', err);
  }
  else {
    console.log('connection with database successful');
  }
});


Mongoose.connection.on('error', (err) => {
    if (err) throw err;
});

Mongoose.Promise = global.Promise;

module.exports = {
    Mongoose,
    models: {
        user: require('./schemas/users.js') 
    }
};