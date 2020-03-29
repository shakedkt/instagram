<template>
  <section class="login-page">

    <div class="login-background">
    <img src="../photos/login-background.png" alt="logo">
  </div>

<div class="sign-in-section">
<img class="login-logo" src="../photos/logo.png" alt="logo">

    <div>
      <form @submit.prevent="doLogin">
        <input class="form-input" type="text" v-model="loginCred.userName" placeholder="Username"/>
        <br />
        <input class="form-input" type="text" v-model="loginCred.password" placeholder="Password"/>
        <br />
        <div class="error-msg">{{this.msg}} </div>
        <button class="login-section-btn">Login</button>
      </form>
    </div><hr>

<div>
  <span class="login-as-guest" @click="loginAsGuest">Login as guest</span>
</div>
<hr>

    <div>
      <form class="sign-up" @submit.prevent="doSignup">
        <input class="form-input" type="text" v-model="signupCred.email" placeholder="Email" required/>
        <br />
        <input class="form-input" type="text" v-model="signupCred.password" placeholder="Password" required/>
        <br />
        <input class="form-input" type="text" v-model="signupCred.userName" placeholder="Username" required/>
        <br />
        <button class="login-section-btn">Signup</button>
      </form>
    </div>


</div>
    
  </section>
</template>

<script>
export default {
  name: 'login',
   data() {
    return {
      loginCred: {},
      signupCred: {},
      userToEdit: {},
      msg: '',
      isGuest: false
    }
  },
 computed: {
    users() {
      return this.$store.getters.users
    },
    loggedInUser() {
      return this.$store.getters.loggedInUser
    },
    userName() {
      return this.$store.getters.loggedInUser.userName
    }
  },
 methods: {  
  async doLogin() {
      const cred = this.loginCred
      if(!cred.userName || !cred.password && this.isGuest === false) return this.msg = 'Please enter userName/password'
      console.log('cred',cred);
      
      var user = await this.$store.dispatch({type :'login', userCred:cred})
      console.log('user in log-in', user);
      
      this.loginCred = {};
      if (user) this.$router.push('/user/' + user.userName + '/home')
      else return this.msg = 'userName or password incorrect'
    },   

    doLogout() {
      this.$store.dispatch({type: 'logout'})
      if (this.isGuest === true) this.isGuest = false
    },
    doSignup() {
      const cred = this.signupCred
      this.$store.dispatch({type: 'signup', userCred: cred})
    },
    async loginAsGuest() {
      this.loginCred.userName = 'guest'
      this.loginCred.password = '1'
      this.isGuest = true
      this.doLogin()
    }
 }

}
</script>

<style>

</style>