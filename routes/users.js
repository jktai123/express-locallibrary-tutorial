var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 
router.get('/cool', function(req, res, next) {
  res.render('index', { title: 'Express cool' });
});

module.exports = router;
