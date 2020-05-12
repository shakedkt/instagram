<template>
  <section class="signup-page">
    <div class="sign-in-section">
      <img class="login-logo" src="../photos/logo.png" alt="logo" />
      <div>
        <form @submit.prevent="doSignup">
          <input class="form-input" type="email" v-model="signupCred.email" placeholder="Email" />
          <br />
          <input
            class="form-input"
            type="text"
            v-model="signupCred.fullName"
            placeholder="Full Name"
          />
          <br />
          <input
            class="form-input"
            type="text"
            v-model="signupCred.username"
            placeholder="Username"
          />
          <br />
          <input
            class="form-input"
            type="password"
            v-model="signupCred.password"
            placeholder="Password"
          />
          <div class="loading-svg" v-if="this.isLoading"><img :src="this.loadingSvg"></div>
          <div class="error-msg">{{this.msg}}</div>
          <button class="login-section-btn">Sign up</button>
        </form>
      </div>
      
    </div>
    <div class="log-in">
        <span>
          Have an account?
          <router-link :to="'/'" exact>
            <span class="sign-up-btn">Log in</span>
          </router-link>
        </span>
      </div>
  </section>
</template>

<script>

import loadingSvg from '../photos/loading.svg'
export default {
  name: "signup",
  data() {
    return {
      signupCred: {},
      msg: "",
      isLoading: true,
      isGuest: false
    };
  },
  methods: {
   async doSignup() {
      const cred = this.signupCred;
      
      if(cred.password.length < 7) {
          this.msg = 'password must be at least 7 characters'
          return
      }
      this.$store.dispatch({ type: "signup", userCred: cred });
      this.$router.push("/");
    }
   
  }
};
</script>

<style>
</style>