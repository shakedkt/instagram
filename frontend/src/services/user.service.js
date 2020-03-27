import { storageService } from './storage.service.js'

export default {
  login,
  logout,
  // signup,
  getUsers,
  getByUsername
}

const KEY = 'UsersDB'

var mockDataUsers = [
  {
    _id: 1,
    fullName: "shaked katsir",
    userName: "shakedkt",
    password: "1234",
    avatar: "https://robohash.org/suscipitquosit.jpg?size=50x50&set=set1",
    isAdmin: true,
    followers: [{
      _id: 84,
      fullName: "Mill Valentine",
      avatar: "https://robohash.org/laborumrepudiandaeaccusamus.png?size=50x50&set=set1"
    }],
    following: [{
      _id: 3,
      FullName: "Charlot Oughtright",
      avatar: "https://robohash.org/porrorecusandaesuscipit.jpg?size=50x50&set=set1"
    }],
    posts: [],
    likeCount: 8122
  }, {
    _id: 2,
    fullName: "Jacqui D'Almeida",
    userName: "amilnes1",
    password: "zdymRqhzpooU",
    avatar: "https://robohash.org/temporasintaut.bmp?size=50x50&set=set1",
    isAdmin: false,
    followers: [{
      _id: 639,
      fullName: "Amandie Haysham",
      avatar: "https://robohash.org/rationealiasomnis.bmp?size=50x50&set=set1"
    }],
    following: [{
      _id: 7863,
      FullName: "Andy Milnes",
      avatar: "https://robohash.org/fugiatquasquidem.png?size=50x50&set=set1"
    }],
    posts: [],
    likeCount: 4423
  }
]

var gUsers = _createUsers();

function _createUsers() {
  var users = storageService.load(KEY)

  if (!users || !users.length) {
    users = mockDataUsers;
    storageService.store(KEY, users)
  }
  return users;
}

function getUsers() {
  return gUsers;
}

function login(user) {
  var users = storageService.load(KEY)
  for (let currUser of users) {
    if (currUser.userName === user.userName && currUser.password === user.password) {
      delete user.password
      user.avatar = currUser.avatar
      user.fullName = currUser.fullName
      sessionStorage.setItem('user', JSON.stringify(user))
      return user;
    }
  }
}
function logout() {
  sessionStorage.clear();

}
function getByUsername(user) {
  var users = storageService.load(KEY)

  for (let currUser of users) {
    if (currUser.userName === user.userName) return currUser
    console.log('no user found');
  }
}



// async function signup(userCred) {
    // const user = await HttpService.post('auth/signup', userCred)
    // return _handleLogin(user)
// }



