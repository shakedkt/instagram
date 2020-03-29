import httpService from './http.service.js'

export default {
    login,
    logout,
    // signup,
    getUsers,
    getByUserName,
    // remove,
    // update
}

async function login(userCred) {
  const user = await httpService.post('auth/login', userCred)
  if (user) return _handleLogin(user)
  return false
}

function getByUserName(userName) {
    return httpService.get(`user/${userName}`)
}
// function remove(userId) {
//     return httpService.delete(`user/${userId}`)
// }

// function update(user) {
//     return httpService.put(`user/${user._id}`, user)
// }


// async function signup(userCred) {
//     const user = await httpService.post('auth/signup', userCred)
//     return _handleLogin(user)
// }
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

