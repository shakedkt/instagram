import httpService from './http.service.js'

export default {
    login,
    logout,
    getUsers,
    getByUserName,
    signup,
}

async function login(userCred) {
  const user = await httpService.post('auth/login', userCred)
  if (user) return _handleLogin(user)
  return false
}

async function signup(userCred) {
    const user = await httpService.post(userCred)
    return user
}

function getByUserName(userName) {
    return httpService.get(`user/${userName}`)
}

async function logout() {
    await httpService.post('auth/logout');
    sessionStorage.clear();
}
function getUsers() {
    return httpService.get('user')
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}

