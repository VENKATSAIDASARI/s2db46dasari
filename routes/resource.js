var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var dog_controller = require('../controllers/dog'); 
 
/// API ROUTE /// 
module.exports = router;
 /* GET detail costume page */
router.get('/detail', dog_controller.dog_view_one_Page);
router.get('/detail', dog_controller.dog_update_put);
// GET resources base. 
router.get('/', api_controller.api); 
 
/// dog ROUTES /// 
 
// POST request for creating a dog.  
router.post('/dog', dog_controller.dog_create_post); 
 
// DELETE request to delete dog. 
router.delete('/dog/:id', dog_controller.dog_delete); 
 
// PUT request to update dog. 
router.put('/dog/:id', dog_controller.dog_update_put); 
 
// GET request for one dog. 
router.get('/dog/:id', dog_controller.dog_detail); 
 
// GET request for list of all dog items. 
router.get('/dog', dog_controller.dog_list); 

/* GET create costume page */
router.get('/create', dog_controller.dog_create_Page);
 

/* GET create update page */
//router.get('/update', dog_controller.dog_update_put);

/* GET delete costume page */
router.get('/delete', dog_controller.dog_delete_Page);
module.exports = router;``