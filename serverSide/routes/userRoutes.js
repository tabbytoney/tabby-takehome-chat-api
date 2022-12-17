const express = require('express');
const { regUser, authUser } = require('../controllers/userControllers');
const router = express.Router();

router.post('/login', authUser);
router.route('/').post(regUser);

module.exports = router;
