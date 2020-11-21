const express = require('express');
const router = express.Router();

const resultController = require('../controllers/result');

router.get('/:levelNum', resultController.getResult);

module.exports = router;
