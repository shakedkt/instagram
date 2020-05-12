<template>
  <section class="login-page">
    <div class="login-background">
      <img src="../photos/login-background.png" alt="logo" />
    </div>

    <div class="signup-or-login">
      <div class="sign-in-section">
        <img class="login-logo" src="../photos/logo.png" alt="logo" />
        <div>
          <form @submit.prevent="doLogin">
            <input
              class="form-input"
              type="text"
              v-model="loginCred.userName"
              placeholder="Username"
            />
            <br />
            <input
              class="form-input"
              type="password"
              v-model="loginCred.password"
              placeholder="Password"
            />
            <br />
            <div class="error-msg">{{this.msg}}</div>
            <button class="login-section-btn">Login</button>
          </form>
        </div>
        <hr />

        <div class="guest-mode">
          <span class="login-as-guest" @click="loginAsGuest">Login as guest</span>
        </div>
      </div>
      <div class="sign-up">
        <span>
          Don't have an account?
          <router-link :to="'/signup'" exact>
            <span class="sign-up-btn">Sign up</span>
          </router-link>
        </span>
      </div>
    </div>
    <span
      class="warning-msg"
    >FOR DEMONSTRATION AND EDUCATIONAL PURPOSES ONLY, DO NOT ENTER A REAL PASSWORD</span>
  </section>
</template>



<script>
export default {
  name: "login",
  data() {
    return {
      loginCred: {},
      signupCred: {},
      userToEdit: {},
      msg: "",
      isGuest: false
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    userName() {
      return this.$store.getters.loggedInUser.userName;
    }
  },
  methods: {
    async doLogin() {
      const cred = this.loginCred;
      if (!cred.userName || (!cred.password && this.isGuest === false))
        return (this.msg = "Please enter userName/password");
      var user = await this.$store.dispatch({ type: "login", userCred: cred });

      this.loginCred = {};
      if (user) this.$router.push("/user/" + user.userName + "/home");
      else return (this.msg = "userName or password incorrect");
    },

    doLogout() {
      this.$store.dispatch({ type: "logout" });
      if (this.isGuest === true) this.isGuest = false;
    },
  
    async loginAsGuest() {
      this.loginCred.userName = "guest";
      this.loginCred.password = "1234567";
      this.isGuest = true;
      this.doLogin();
    }
  }
};
</script>

<style>
</style>