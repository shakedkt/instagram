<template>
<section>

   <div id="nav" class="main-header">

  <div class="create-new-post">
<router-link :to=" '/user/:' + userId + '/create' " v-if="router !== 'create' " exact>
    <img src="../photos/add_btn.png">
</router-link>
  </div>


<router-link :to="'/user/' + userId + '/home'" class="home" exact>
  <div class="logo-img">
      <img src="../photos/logo.png">
  </div>
      </router-link>

    <div class="search">
         <user-search></user-search>
    </div>

    <div class="navbar-controllers">

      <router-link :to=" '/user/' + userId + '/home' " v-html="router === 'home-page' ? homePathColor.fullHome : homePathColor.emptyHome" exact>  
      </router-link>

          <svg class="inbox" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
            <path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path>
              <path d="M14.7 48.4l2.9-.7"></path>
          </svg>

          <svg class="compass" height="22" viewBox="0 0 48 48" width="22">
            <path clip-rule="evenodd" d="M24 .5C37 .5 47.5 11 47.5 24S37 47.5 24 47.5.5 37 .5 24 11 .5 24 .5zm0 44c11.3 0 20.5-9.2 20.5-20.5S35.3 3.5 24 3.5 3.5 12.7 3.5 24 12.7 44.5 24 44.5zm-4.4-23.7c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8zm6.2 5l4.3-7.8-7.8 4.3 3.5 3.5z" fill-rule="evenodd"></path>
          </svg>

        <a class="likes">
          <svg height="22" viewBox="0 0 48 48" width="22" >
            <path clip-rule="evenodd" d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" fill-rule="evenodd"></path>
          </svg>
        </a>

        <router-link :to=" '/user/' + userId "  exact>
          <img class="profile-pic" src="https://instagram.fevn1-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fevn1-1.fna.fbcdn.net&amp;_nc_ohc=mpZNugcTX-0AX9DS5Gx&amp;oh=84e7f54665e885e15fce0a2fed6d6dd1&amp;oe=5E9E17F1&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2">
        </router-link>
      </div>
    </div>
</section>
</template>


<script>
import userSearch from '@/components/user-search.cmp.vue';
import svgService from '../services/svg.service.js'
export default {
 components: {
    userSearch
  },
  computed: {
    userId() {
      if(this.$store.getters.loggedInUser) return this.$store.getters.loggedInUser.userName
      return 1
    }
  },
    data () {
      return {
        router: this.$route.name,
        homePathColor: svgService.getHomePath(),
      }
    },
    created() {
      console.log(this.router);
      }
}
</script>

<style>

</style>