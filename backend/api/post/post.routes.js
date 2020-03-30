const express = require('express')
const {addPost, getPosts, deletePost, addComment, changeLike} = require('./post.controller')
const router = express.Router()

router.get('/', getPosts)
router.post('/', addPost)
router.delete('/:id', deletePost)
router.put('/add-comment/:id', addComment)
router.put('/like/:id', changeLike)


module.exports = router