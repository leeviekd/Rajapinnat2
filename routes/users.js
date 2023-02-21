var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//GET-metodi
router.get('/toka', function(req, res, next) {
  res.send('hello from function');
});

// GET-metodi yhdellä parametrilla
router.get('/kolmas/:name', function(req, res, next) {
  res.send('hello '+req.params.name);
  console.log(req.params.name);
});

// GET-metodi kahdella parametrilla
router.get('/neljas/:name/:lname', function(req, res, next) {
  res.send('hello '+req.params.name+' '+req.params.lname);
  console.log(req.params.name);
  console.log(req.params.lname);
});

//  POST-metodi
router.post('/', function(req, res, next) {
  res.send('hello '+req.body.name+' '+req.body.lname);
  console.log(req.body.name);
  console.log(req.body.lname);
});

module.exports = router;
