import express from 'express';  

let router = express.Router();
router.get('/', function(req, res) {
  res.json('API Works');
});

export default router;