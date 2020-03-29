// const logger = require('../../services/logger.service')
const postService = require('./post.service')
 
// TODO: needs error handling! try, catch

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
    // post.byUserId = req.session.user._id;
    post = await postService.add(post)
    // post.createdBy.userName = req.session.user;
    
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