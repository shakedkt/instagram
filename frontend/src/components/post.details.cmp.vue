<template>
  <section class="post-modal" v-if="this.isDetailsOpen">
    <div class="post-details">
      <img class="image-post" :src="post.imgUrl" />
      <div class="post-details-section">
        <div>
        <div class="top-section">
          <div class="user-and-pic">
            <router-link :to="'/user/' + userName + '/home'" class="home" exact>
              <img class="profile-pic" :src="post.createdBy.avatar" />
            </router-link>
            <span class="creator-name">{{post.createdBy.userName}}</span>
          </div>
          <span class="post-menu" @click="changeModal">...</span>
        </div>
        <div v-if="isModalOpen" class="post-modal" @click="changeModal">
          <ul class="action-list">
            <li
              class="delete-post"
              v-if="this.userName.userName === this.post.createdBy.userName || this.userName.isAdmin === true"
              @click="deletePost"
            >delete post</li>
            <li class="close-modal">Cancel</li>
          </ul>
        </div>

        <section class="desc-and-comments">
          <div class="post-desc">
            <span class="creator-name">{{post.createdBy.userName}}</span>
            <span> {{post.desc}}</span>
          </div>

          <ul class="comments">
            <li v-for="comment in post.comments" :key="comment._id">
              <span class="creator-name">{{comment.userName}}</span>
              <span>{{comment.txt}}</span>
            </li>
          </ul>
        </section>
</div>
        <div>
          <div>
        <div class="action-bar">
          <div class="left-side-actions">
            <span class="like-btn" @click="changeLike">
              <button
                class="wpO6b"
                type="button"
                v-html=" post.isLiked ? likesPathColor.fullLike : likesPathColor.emptyLike"
              ></button>
            </span>

            <span class="comment-btn" @click="focusComment">
              <button class="wpO6b" type="button">
                <svg
                  aria-label="Comment"
                  class="_8-yf5"
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </span>

            <button class="share" type="button">
              <svg
                aria-label="Share Post"
                class="_8-yf5"
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"
                />
                <path d="M14.7 48.4l2.9-.7" />
              </svg>
            </button>
          </div>

          <div class="right-side-actions">
            <span class="bookmark">
              <button class="wpO6b" type="button">
                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                  <path
                    d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
          <div class="like-count">{{post.likes}} likes</div>
        </div>

        <div>
          <form class="add-comment" @submit.prevent="addComment">
            <input
              ref="comment"
              class="form-input"
              type="text"
              v-model="commentBody"
              placeholder="Add a comment..."
              required
            />
            <button class="post-section-btn">Post</button>
          </form>
        </div>
        </div>
      </div>
    </div>
    <div class="exit-btn" @click="toggleDetails" v-html="this.exitPath.exitSvg"></div>
  </section>
</template>

<script>
import svgService from "../services/svg.service";

export default {
  props: {
    post: Object
  },
  data() {
    return {
      isModalOpen: false,
      commentBody: "",
      isDetailsOpen: false,
      exitPath: svgService.getExitPath(),
      likesPathColor: svgService.getLikePath()
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsOpen = !this.isDetailsOpen;
    },
    async addComment() {
      const comment = {
        postId: this.post._id,
        txt: this.commentBody,
        createdAt: Date.now(),
        userName: this.userName.userName
      };
      
      await this.$store.dispatch({ type: "addComment", comment });      
      this.commentBody = "";
    },
    async changeLike() {
      var likes = parseInt(this.post.likes);
      this.post.isLiked = !this.post.isLiked;
      if (this.post.isLiked) {
        likes += 1;
        this.post.likes = likes;
      } else {
        likes -= 1;
        this.post.likes = likes;
      }
    },
    focusComment() {
      this.$refs.comment.focus();
    },
    async deletePost() {
      await this.$store.dispatch({ type: "deletePost", post: this.post });
      const userName = this.$route.params.id;
      await this.$store.dispatch({ type: "loadUser", userName });

      this.changeModal();
    },
    changeModal() {
      this.isModalOpen = !this.isModalOpen;
    }
  },
  computed: {
    userName() {
      if (this.$store.getters.loggedInUser)
        return this.$store.getters.loggedInUser;
      return -1;
    }
  }
};
</script>

<style>
</style>