const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

const saltRounds = 10

async function login(userName, password) {
    logger.debug(`auth.service - login with email: ${userName}`)
    if (!userName || !password) return Promise.reject('email and password are required!')

    const user = await userService.getByUserName(userName)
    console.log('user got from userService:', user);

    if (!user) return Promise.reject('Invalid userName or password')
    const match = await bcrypt.compare(password, user.password)
    console.log('match', match);
    console.log('password:', password, 'user.password:', user.password);
    
    if (!match) return Promise.reject('Invalid password')
    delete user.password;
    return user;
}

async function signup(email, userName, password, fullName) {

    logger.debug(`auth.service - signup with email: ${email}, username: ${userName}, fullname: ${fullName}`)
    if (!email || !password || !userName || !fullName) return Promise.reject('email, username and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ email, password: hash, userName, fullName })
}

module.exports = {
    signup,
    login,
}