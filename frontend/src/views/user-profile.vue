<template>
  <section v-if="currUser">
    <navbar></navbar>
    <div class="profile">
      <div class="deatils-section">
        <img class="profile-pic" :src="currUser.avatar" />
        <div class="user-details">
          <div class="top-user-deatils">
            <span class="profile-userName">{{currUser.userName}}</span>

            <div class="modal-menu">
              <button class="settings-btn" @click="changeModal" type="button">
                <img src="../photos/settings.png" alt />
              </button>
            </div>
          </div>
          <div class="user-deatils-wide-display">
            <div class="posts-count">
              <span class="deatails">{{currUser.posts.length}}</span>
              <span>posts</span>
            </div>
            <div class="followers-count">
              <span class="deatails">{{currUser.followers.length}}</span>
              <span>followers</span>
            </div>
            <div class="following-count">
              <span class="deatails">{{currUser.following.length}}</span>
              <span>following</span>
            </div>
          </div>
          <div class="full-name">{{currUser.fullName}}</div>
        </div>
      </div>

      <div v-if="isModalOpen" class="post-modal" @click="changeModal">
        <ul class="action-list">
          <li @click="doLogout">Logout</li>
          <li class="close-modal">Cancel</li>
        </ul>
      </div>

      <div class="show-options">
        <span>posts</span>
        <span>igtv</span>
        <span>saved</span>
        <span>tagged</span>
      </div>

      <div class="user-deatils-narrow-display">
        <div class="posts-count">
          <span class="deatails">{{currUser.posts.length}}</span>
          <span>posts</span>
        </div>
        <div class="followers-count">
          <span class="deatails">{{currUser.followers.length}}</span>
          <span>followers</span>
        </div>
        <div class="following-count">
          <span class="deatails">{{currUser.following.length}}</span>
          <span>following</span>
        </div>
      </div>

      <div class="options-menu">
        <span class="post-svg" v-html="this.postsPath.postSvg"></span>
        <span class="video-svg" v-html="this.videoPath.videoSvg"></span>
        <span class="saved-svg" v-html="this.savedPath.savedSvg"></span>
        <span class="tagged-svg" v-html="this.taggedPath.taggedSvg"></span>
      </div>

      <div class="posts-container">
        <div v-for="post in posts" :key="post._id">
          <postDetails :post="post" :ref="post._id"></postDetails>
          <img @click="enterPost(post._id)" class="grid-item" :src="post.imgUrl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import navbar from "../components/nav-bar.cmp.vue";
import svgService from "../services/svg.service";
import postDetails from "../components/post.details.cmp";

export default {
  name: "profile",
  components: {
    navbar,
    postDetails
  },
  data() {
    return {
      isModalOpen: false,
      // isDetailsOpen: false,
      // userPosts: 
      postsPath: svgService.getPostsPath(),
      videoPath: svgService.getVideoPath(),
      savedPath: svgService.getSavedPath(),
      taggedPath: svgService.getTaggedPath()
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    currUser() {
      return this.$store.getters.currUser;
    },
    posts() {
      var posts = this.currUser.posts
      return posts.reverse()
    }
  },
  methods: {
    changeModal() {
      this.isModalOpen = !this.isModalOpen;
    },

    doLogout() {
      this.$store.dispatch({ type: "logout" });
      this.$router.push("/");
    },
    enterPost(refKey) {
      console.log("this.$refs.refKey", this.$refs[refKey]);
      let cmp = this.$refs[refKey]
      cmp[0].toggleDetails()
    }
  },
created() {
  var userName = this.$route.params.id;
  console.log(userName);
  
    this.$store.dispatch({
      type: "loadUser",
      userName
    });
  },
};
</script>

<style>
</style>
   