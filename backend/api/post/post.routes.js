const express = require('express')
// const {requireAuth, requireAdm in} = require('../../middlewares/requireAuth.middleware')
const {addPost, getPosts, deletePost, addComment} = require('./post.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getPosts)
router.post('/', addPost)
router.delete('/:id', deletePost)
router.put('/:id', addComment)

module.exports = router