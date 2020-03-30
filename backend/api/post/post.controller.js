const postService = require('./post.service')
const userService = require('../user/user.service.js')

module.exports = {
    getPosts,
    deletePost,
    addPost,
    addComment,
    changeLike
}


async function getPosts(req, res) {
    try {
        const posts = await postService.query(req.query)
        res.json(posts)
    } catch (err) {
        res.status(500).send({ error: 'cannot get posts' })
        
    }
}

async function deletePost(req, res) {
    await postService.remove(req.params.id)
    res.end()
}

async function addPost(req, res) {
    var post = req.body;
    post.userName = req.session.user.userName;
    post = await postService.add(post)
    await userService.update(post)
    
    res.json(post)
}


async function addComment(req, res) {
    var comment = req.body;
    comment = await postService.update(comment)    
    res.json(comment)
}


async function changeLike(req, res) {
    var post = req.body;
    console.log('got here');
    
    post = await postService.changeLike(post)    
    res.json(post)
}