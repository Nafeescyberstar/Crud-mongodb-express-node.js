const express = require('express');
const router = express.Router();
const Model = require('../model/model');
const empController = require('../controllers/empdata');

//Post method
router.post('/adduser', empController.adduser);

//Get all Method
router.get('/', empController.index);
// router.get('/addform',empController.addform);

// //Get by ID method
// router.get('/getOne/:id', empController.GetOneRecord);

router.get('/edit/:id', empController.editData);
//Update by ID Method
router.patch('/update/:id', empController.updateRecord);

//Delete by ID Method
router.delete('/delete/:id', empController.deleteRecord);

module.exports = router;