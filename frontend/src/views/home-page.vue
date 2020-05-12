<template>
  <section>
    <navbar></navbar>
    <div class="home">
      <post-list :posts="posts"></post-list>
    </div>
  </section>
</template>

<script>
import postList from "../components/post-list.cmp.vue";
import navbar from "../components/nav-bar.cmp.vue";

export default {
  name: "home",
  components: {
    postList,
    navbar
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  created() {
    this.$store.dispatch({
      type: "loadPosts",
      amount: 1
    });
  },
  methods: {
    scroll() {
      let theRightThisthis = this
      window.onscroll = function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          let postAmount = theRightThisthis.$store.getters.posts.length;
          theRightThisthis.$store.dispatch({
            type: "loadPosts",
            amount: postAmount + 2
          });
        }
      };
    }
  },
  mounted() {
    this.scroll();
  }
};
</script>
