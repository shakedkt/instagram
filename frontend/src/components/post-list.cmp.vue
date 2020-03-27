<template>
<div class="post-list">
        <post-preview v-for="post in posts" :key="post._id" :post="post"></post-preview>
  </div>
</template>

<script>
 import postPreview from "./post-preview.cmp.vue";

export default {
  props: {
    posts: Array
  },
  components: {
     postPreview
  }
};
</script>