const express = require('express');
const usersController = require('../../controllers/V1/users-controller');
const { isAuth, isValidHostname } = require('../../middlewares/auth');

const router = express.Router();

router.post('/login', usersController.login);
router.post('/create', usersController.createUser);
router.post('/update', isValidHostname, isAuth, usersController.updateUser);
router.post('/delete', usersController.deleteUser);
router.get('/get-all', usersController.getUsers);

module.exports = router;
