const express = require('express');
const {test , updateUser, deleteUser, getUserListings} = require('../controller/user.controller.js');
const verifyToken = require('../utils/verifyUser.js');

const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getUserListings);

module.exports = router;
