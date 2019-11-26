const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/Users.controllers');


router.post('/saveUser',ctrlUser.saveUserDetails);
router.get('/getUsers',ctrlUser.getUsersDetails);
router.put('/updateUserById/:id',ctrlUser.updateUserById);
router.post('/getUserById',ctrlUser.getUserById);
router.delete('/deleteUserById/:id',ctrlUser.deleteUserById);

module.exports = router;


