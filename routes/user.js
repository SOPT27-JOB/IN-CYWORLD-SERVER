const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/', userController.createUser, userController.getScoreRate); // 유저 생성

module.exports = router;
