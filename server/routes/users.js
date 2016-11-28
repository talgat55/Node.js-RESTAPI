import express from 'express';  
import User from '../models/users';  
let router = express.Router();

router.get('/setup', (req, res) => {
  	let data = { 
    	username: 'NickCerminara', 
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

 
router.get('/users', function(req, res) {

	User.findItems({}, (err, data)=>{
		if (err) throw err;
		res.send(data)

	})

});   

export default router; 
