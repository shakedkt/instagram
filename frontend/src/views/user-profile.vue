<template>
   <section>
          <navbar></navbar>
        <img class="profile-pic" src="https://instagram.fevn1-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fevn1-1.fna.fbcdn.net&amp;_nc_ohc=mpZNugcTX-0AX9DS5Gx&amp;oh=84e7f54665e885e15fce0a2fed6d6dd1&amp;oe=5E9E17F1&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2">
<span> {{user.userName}} </span>
<div class="user-deatils">
<span>{{user.followers.length}} </span>
<span>{{user.following.length}} </span>
<span>{{user.posts.length}} </span>
</div>
  </section>
</template>

<script>
  import navbar from '../components/nav-bar.cmp.vue'
  import userService from '../services/user.service.js'
export default {
  name: "profile",
  components: {
    navbar
  },
  computed: {
    user() {      
    var user = this.$store.getters.loggedInUser
    console.log(userService.getByUsername(user));
    
     return (userService.getByUsername(user))
    },
  },
}
</script>

<style>

</style>