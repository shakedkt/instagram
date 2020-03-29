const express = require('express')
// const {requireAuth, requireAdm in} = require('../../middlewares/requireAuth.middleware')
const {addPost, getPosts, deletePost, addComment, changeLike} = require('./post.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getPosts)
router.post('/', addPost)
router.delete('/:id', deletePost)
router.put('/add-comment/:id', addComment)
router.put('/like/:id', changeLike)


module.exports = router