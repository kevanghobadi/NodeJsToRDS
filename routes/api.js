var express = require('express');
var router = express.Router();
var dao = require('../dao/user');

router.get('/', function(req, res, next) {
  res.statusCode = 200;
  var number = req.query.number;
  res.send('Your number is:' + number);
});

router.post('/',  function(req, res) {
  dao.createEntry(req.query.userId)
  .then(() => res.sendStatus(200))
});

module.exports = router;
