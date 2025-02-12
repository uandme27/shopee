const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController')

router.get('/', UserController.getUser);
router.post('/login', UserController.login);
router.post('/create', UserController.createUser);


module.exports = router;
