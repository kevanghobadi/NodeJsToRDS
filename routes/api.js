var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.statusCode = 200;
  var number = req.query.number;
  res.send('Your number is:' + number);
});


module.exports = router;
