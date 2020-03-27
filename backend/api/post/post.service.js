
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy = {}) {
    
    const collection = await dbService.getCollection('post')
    try {
        const posts = collection.find().toArray(); // if we get something messy, try
        console.log(posts);
        
        return posts
    } catch (err) {
        console.log('ERROR: cannot find posts')
        throw err;
    }
}

async function remove(postId) {
    const collection = await dbService.getCollection('post')
    try {
        await collection.deleteOne({"_id":ObjectId(postId)})
    } catch (err) {
        console.log(`ERROR: cannot remove post ${postId}`)
        throw err;
    }
}


async function add(post) {
    post.byUserId = ObjectId(post.byUserId);
    post.aboutUserId = ObjectId(post.aboutUserId);

    const collection = await dbService.getCollection('post')
    try {
        await collection.insertOne(post);
        return post;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

module.exports = {
    query,
    remove,
    add
}


