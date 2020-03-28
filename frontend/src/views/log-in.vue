<template>
  <section class="login-page">

    <div class="login-background">
    <img src="../photos/login-background.png" alt="logo">
  </div>

<div class="sign-in-section">
<img class="login-logo" src="../photos/logo.png" alt="logo">

    <div>
      <form @submit.prevent="doLogin">
        <input class="form-input" type="text" v-model="loginCred.userName" placeholder="username" required/>
        <br />
        <input class="form-input" type="text" v-model="loginCred.password" placeholder="Password" required/>
        <br />
        <button class="login-section-btn">Login</button>
      </form>
    </div><hr>


    <div>
      <form @submit.prevent="doSignup">
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
      msg: ''
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
      if(!cred.userName || !cred.password) return this.msg = 'Please enter user/password'
      await this.$store.dispatch({type :'login', userCred:cred})
      this.loginCred = {};
      this.$router.push('/user/' + this.userName + '/home')
    },   

    doLogout() {
      this.$store.dispatch({type: 'logout'})
    },
    doSignup() {
      const cred = this.signupCred
      this.$store.dispatch({type: 'signup', userCred: cred})
    }
 }

}
</script>

<style>

</style>