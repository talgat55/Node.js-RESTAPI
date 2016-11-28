import express from 'express';  
import jwt from 'jsonwebtoken';   
import User from '../models/users';  
import { checkToken } from '../untils';
import bcrypt from 'bcrypt-nodejs'  
import config from '../../config/config.json' 
let router = express.Router(); 

router.get('/setup', (req, res) => {
  	let data = { 
    	username: 'admin', 
    	password: 'password',
    	socialId: 'socid', 
    	admin: true 
    	
  	};
	User.create(data,(err)=>{

		if(err)  throw err;
		res.send("good")
	})
	//res.send("works");
   

});

// get token
router.post('/authenticate', function(req, res) { 

	User.findOne( req.body.name, (err, data) => {

	if (err) throw err;
 

    if (!data) {
         
        res.send({success: false, message: 'Authentication failed. User not found.'});
    
    } else if (data) {

      // check if password matches 
      if (!bcrypt.compareSync(req.body.password, data.password)) {

        res.send({ success: false, message: 'Authentication failed. Wrong password.' });
      
      } else { 
        // if user is found and password is right
        // create a token
        var token = jwt.sign(data, config.secret, {
          	expiresIn: '24h'
        });
 
        res.send({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

    }



	})



});
router.get('/users', function(req, res) {

	User.findItems({}, (err, data)=>{
		if (err) throw err;
		res.send(data)

	})

});   
// check token  
router.use(checkToken);

router.get('/', function(req, res) {

	User.findItems({}, (err, data)=>{
		if (err) throw err;
		res.send(data)

	})

});   




export default router; 
