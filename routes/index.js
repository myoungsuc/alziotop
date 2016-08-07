var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ALZIO - 2003', alz: 'IT전문교육!' });
});

module.exports = router;