const express = require('express');
const { secure } = require('../middleware/authenticateMiddleware');
const {
  regUser,
  authUser,
  everyUser,
} = require('../controllers/userControllers');
const router = express.Router();

router.post('/login', authUser);
router.route('/').post(regUser).get(everyUser);

module.exports = router;
