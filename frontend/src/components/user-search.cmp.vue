<template>
  <section>
    <input type="text" class="search-box" v-model="filterBy.name" @input="emitFilter" placeholder="Search" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        name: "",
      }
    };
  },
  methods: {
    emitFilter() {
      this.$emit("set-filter", JSON.parse(JSON.stringify(this.filterBy)));
    }
  }
};
</script>
<style>
</style>