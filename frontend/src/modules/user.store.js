import UserService from '../services/user.service.js'
import userService from '../services/user.service.js';

var localloggedInUser = null;
if (sessionStorage.user) localloggedInUser = JSON.parse(sessionStorage.user);

export default {
    state: {
        loggedInUser : localloggedInUser,
        users: [],
        isGuest: false
    },
    getters: {
        users(state) {
            return state.users;
        },
        loggedInUser(state) {
            return state.loggedInUser
        },
        isGuest(state) {
            return state.isGuest
        }
    },
    mutations: {
        setUser(state, {user}) {
            state.loggedInUser = user;            
        },
        setUsers(state, {users}) {
            state.users = users;
        },
        removeUser(state, {userId}) {
            state.users = state.users.filter(user => user._id !== userId)
        },
    },
    actions: {
        async login(context, {userCred}) {
            const user = await UserService.login(userCred);
            context.commit({type: 'setUser', user})
            return user;
        },
        async signup(context, {userCred}) {
            const user = await UserService.signup(userCred)
            context.commit({type: 'setUser', user})
            return user;
            
        },
        async logout(context) {
            await UserService.logout()
            context.commit({type: 'setUsers', users: []})
            context.commit({type: 'setUser', user: null})
        },
        async loadUsers(context) {
            const users = await UserService.getUsers();
            context.commit({type: 'setUsers', users})
            return users;
        },
        async loadUser(context) {
            const user = await userService.getByUserName();
            context.commit({type: 'setUser', user})
            return user
        },
        async removeUser(context, {userId}) {
            await UserService.remove(userId);
            context.commit({type: 'removeUser', userId})
        },
        async updateUser(context, {user}) {
            user = await UserService.update(user);
            context.commit({type: 'setUser', user})
            return user;
        }
    }
}
