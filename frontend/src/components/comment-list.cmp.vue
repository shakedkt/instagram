<template>
<div class="comment-list">

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