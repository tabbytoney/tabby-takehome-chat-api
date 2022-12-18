const express = require('express');
const { secure } = require('../middleware/authenticateMiddleware');
const { sendMsg, allMsgs } = require('../controllers/msgControllers');

const router = express.Router();

// to send a message
router.route('/').post(secure, sendMsg);

//to get all messages in a certain convo
router.route('/:convoId').get(secure, allMsgs);

module.exports = router;
