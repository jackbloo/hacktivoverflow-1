const express = require('express')
const router = express.Router()
const questionController = require('../controller/question')
const authentication = require('../middlewares/authentication')


router.use(authentication)
router.get('/topTen', questionController.getVotes)
// router.post('/create', questionController.createVotes)



module.exports = router;