import express from 'express';  
import User from '../models/users';  
let router = express.Router();

router.get('/setup', (req, res) => {
  	let data = { 
    	username: 'NickCerminara', 
    	password: 'password' 
  	};
	User.create(data,(err)=>{

		if(err)  throw err;
		res.send("good")
	})	
   

});

 
router.get('/users', function(req, res) {

	User.findItems({}, (err, data)=>{

		res.send(data)

	})

});   

export default router; 
