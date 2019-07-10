<template>
  <div class="home">
    <Posts msg="Welcome to Kirby's Post & Express Backend App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/components/Posts.vue";

export default {
  name: "home",
  components: {
    Posts
  }
};
</script>
<style>
</style>
