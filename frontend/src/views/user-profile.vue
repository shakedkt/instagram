<template>
  <section v-if="loggedInUser">
    <navbar></navbar>
    <div class="profile">
      <div class="deatils-section">
        <img class="profile-pic" :src="loggedInUser.avatar" />
        <div>
          <div class="top-user-deatils">
            <span class="profile-userName">{{loggedInUser.userName}}</span>

            <div>
              <button class="post-menu" @click="changeModal" type="button">
                <svg
                  aria-label="Options"
                  class="_8-yf5"
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="user-deatils">
            <span class="deatails">{{loggedInUser.posts.length}}</span>
            <span>posts</span>
            <span class="deatails">{{loggedInUser.followers.length}}</span>
            <span>followers</span>
            <span class="deatails">{{loggedInUser.following.length}}</span>
            <span>following</span>
          </div>
        </div>
      </div>

      <div v-if="isModalOpen" class="post-modal" @click="changeModal">
        <ul class="action-list">
          <li @click="doLogout">Logout</li>
          <li class="close-modal">Cancel</li>
        </ul>
      </div>
      <hr />
      <div class="show-options">
        <span>posts</span>
        <span>igtv</span>
        <span>saved</span>
        <span>tagged</span>
      </div>

      <div class="posts-container">
        <div v-for="post in loggedInUser.posts" :key="post._id">
          <img class="grid-item" :src="post.imgUrl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import navbar from "../components/nav-bar.cmp.vue";

export default {
  name: "profile",
  components: {
    navbar
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  computed: {
     loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
  methods: {
    changeModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    doLogout() {
      this.$store.dispatch({ type: "logout" });
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>
   