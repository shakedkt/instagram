<template>
  <section>
    <navbar></navbar>

    <section class="new-post">
      
      <div class="create-body">
        <form @submit.prevent="addPost" class="create-form">
          
        <button class="publish">
          <img src="../photos/addPost.png">
        </button>

          <div class="create-form-body">
            <input class="form-input" type="text"  v-model="post.desc" placeholder="write a caption here...." required />
          
            <label>
              <input class="choose-file" @change="uploadImg" type="file" />
              <img v-if="!post.uploadedImg" src="../photos/import_placeholder.png">
              <img v-if="post.uploadedImg" :src="post.uploadedImg" />
            </label>
          </div>
        </form>          
      </div>
  </section>
</section>
</template>

<script>
import navbar from "../components/nav-bar.cmp.vue";
import userService from "../services/user.service.js";

export default {
  name: "home",
  components: {
    navbar
  },
  data() {
    return {
      post: {
        desc: "",
        uploadedImg: ""
      }
    };
  },
  computed: {
    loggedInUser() {
      var user = this.$store.getters.loggedInUser
      return userService.getByUsername(user);
    },
    userName() {
      return this.$store.getters.loggedInUser.userName
    }
  },

  methods: {
    async addPost() {      
      const post = {
        desc: this.post.desc,
        createdBy: {
          userName: this.loggedInUser.userName,
          fullName: this.loggedInUser.fullName,
          avatar: this.loggedInUser.avatar
        },
        imgUrl: this.post.uploadedImg,
        likes: 0,
        location: "",
        comments: []
      };
      await this.$store.dispatch({ type: "addPost", post });
      this.$router.push("/user/" + this.userName + "/home");
    },
    async uploadImg(ev) {
      const res = await this.$store.dispatch({ type: "addImg", ev });

      const { url } = res;
      console.log(url);
      
      this.post.uploadedImg = url;
    }
  }
};
</script>

<style>
</style>