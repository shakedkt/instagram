const userService = require('./user.service.js')

async function getByUserName(req, res) {
    const user = await userService.getByUserName(req.params.id)
    res.send(user)
}

async function signup(req, res) {
    console.log('req.params',req.params);
    // const user = await userService.add(req.params)
    // res.send(user)
}
  
async function getUsers(req, res) {
    const users = await userService.query(req.query)
    res.send(users)
}

async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.end()
}

async function updateUserPost(req, res) {
    const post = req.body;
    await userService.update(post)
    res.send(post)
}

module.exports = {
    getByUserName,
    getUsers,
    deleteUser,
    updateUserPost,
    signup
}