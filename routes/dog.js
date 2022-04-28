var express = require('express');
var router = express.Router();

var dog_controller = require('../controllers/dog');

//res.render('dog', { title: 'Search Results Dog' });

/* GET home page. */
router.get('/', dog_controller.dog_view_all_Page);
  //console.log(`Hello`) 
  //res.render('dog', { title: 'Search Results Dog' });

  console.log("trdfgvb")
  router.get('/update/:id', dog_controller.dog_update_put);

//router.get('/', dog_controller.dog_view_all_Page);

module.exports = router;
