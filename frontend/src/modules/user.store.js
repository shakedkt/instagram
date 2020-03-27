import  userService  from '../services/user.service.js'


export default {
    state: {
        loggedInUser : sessionStorage.user ? JSON.parse(sessionStorage.user) : 'guest',
        users: []
    },
    getters: {
        users(state) {
            return state.users;
        },
        loggedInUser(state) {            
            return state.loggedInUser
        }
    },
    mutations: {
        setUser(state, {user}) {            
            state.loggedInUser = user;
        },
        setUsers(state, {users}) {
            state.users = users;
        },
    },
    actions: {
        async login(context, {userCred}) {            
            const user = await userService.login(userCred);            
            context.commit({type: 'setUser', user})
            
            return user;
        },
        async signup(context, {userCred}) {
            const user = await userService.signup(userCred)
            context.commit({type: 'setUser', user})
            return user;
        },
        async logout(context) {
            await userService.logout()
            context.commit({type: 'setUsers', users: []})
            context.commit({type: 'setUser', user: null})
        },
        async loadUsers(context) {
            const users = await userService.getUsers();
            context.commit({type: 'setUsers', users})
            return users;
        }
    }
}