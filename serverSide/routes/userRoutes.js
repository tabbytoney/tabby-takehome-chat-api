const express = require('express');
const { secure } = require('../middleware/authenticateMiddleware');
const { regUser, authUser } = require('../controllers/userControllers');
const router = express.Router();

router.post('/login', authUser);
router.route('/').post(regUser);

module.exports = router;
