const userService = require('./user.service.js')

async function getByUserName(req, res) {
    console.log('req.params.userName',req.params.id);
    
    const user = await userService.getByUserName(req.params.id)
    res.send(user)
}
  
async function getUsers(req, res) {
    console.log(req.query);
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
    updateUserPost
}