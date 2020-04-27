const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getByUserName, getUsers, signup} = require('./user.controller')
const router = express.Router()

// middleware that is specific to this router
router.use(requireAuth)

router.get('/', getUsers)
router.get('/:id', getByUserName)
router.post('/', signup)

module.exports = router