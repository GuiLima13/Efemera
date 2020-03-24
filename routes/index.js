const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')
/* GET home page. */
router.get('/', homeController.index);
router.post('/newsletter', homeController.news);

module.exports = router;
