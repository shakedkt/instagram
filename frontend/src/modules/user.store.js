import UserService from '../services/user.service.js'
import userService from '../services/user.service.js';

var localloggedInUser = null;
if (sessionStorage.user) localloggedInUser = JSON.parse(sessionStorage.user);

export default {
    state: {
        loggedInUser: localloggedInUser,
        currUser: false,
        users: [],
        isGuest: false,
    },
    getters: {
        users(state) {
            return state.users;
        },
        loggedInUser(state) {
            return state.loggedInUser
        },
        currUser(state) {
            return state.currUser
        },
        isGuest(state) {
            return state.isGuest
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.currUser = user
            console.log('currUser', state.currUser);
        },
        setLogInUser(state, { user }) {
            state.loggedInUser = user
            console.log('loggedInUser', state.loggedInUser);
        },
        setUsers(state, { users }) {
            state.users = users;
        },
        removeUser(state, { userId }) {
            state.users = state.users.filter(user => user._id !== userId)
        },
    },
    actions: {
        async login(context, { userCred }) {
            const user = await UserService.login(userCred);
            context.commit({ type: 'setLogInUser', user })
            return user;
        },
        async signup(context, { userCred }) {
            const user = await UserService.signup(userCred)
            return user;
        },
        async logout(context) {
            await UserService.logout()
            context.commit({ type: 'setUsers', users: [] })
            context.commit({ type: 'setUser', user: null })
        },
        async loadUsers(context) {
            const users = await UserService.getUsers();
            context.commit({ type: 'setUsers', users })
            return users;
        },
        async loadUser(context, { userName }) {
            const user = await userService.getByUserName(userName);
            console.log('userStore update user:', user);

            context.commit({ type: 'setUser', user })
            return user
        }
    }
}
