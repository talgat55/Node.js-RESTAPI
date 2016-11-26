import express from 'express';  

let router = express.Router();
router.get('/', function(req, res) {
  res.json({ message: 'API Woeks' });
});

export router;