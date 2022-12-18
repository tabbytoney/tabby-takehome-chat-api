const express = require('express');
const {
  accessConvo,
  getAllConvos,
} = require('../controllers/convoControllers');
const { secure } = require('../middleware/authenticateMiddleware');

const router = express.Router();

// to access or create a convo
router.route('/').post(secure, accessConvo);

// get list of convos
router.route('/').get(secure, getAllConvos);

module.exports = router;
