<template>
  <div class="outerMost">
    <div class="container">
      <h1>Latest Posts</h1>
      <div class="create-post">
        <label for="create-post">Say Something....</label>
        <input type="text" id="create-post" v-model="text" placeholder="Create a post" />
        <button v-on:click="createPost">Post</button>
      </div>
      <hr />
      <p class="error" v-if="error">{{ error }}</p>
      <div class="posts-container">
        <div
          class="post"
          v-for="(post, index) in posts"
          v-bind:item="post"
          v-bind:index="index"
          v-bind:key="post._id"
        >
          <p class="x-out" v-on:click="deletePost(post._id)">X</p>
          {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
          <p class="text">{{ post.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import PostService from "../PostService";
import store from "@/store";
window.console.log(store);
export default {
  name: "Posts",
  computed: {
    posts() {
      return store.getters.allPosts;
    }
  },
  data() {
    return {
      error: "",
      text: ""
    };
  },
  created() {
    store.dispatch("fetchPosts");
  },
  methods: {
    createPost() {
      store.dispatch("createPost", this.text);
    },
    async deletePost(id) {
      store.dispatch("deletePost", id);
    }
  }
};
</script>

<style scoped>
div.outerMost {
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-top: 40px;
}
div.container {
  width: 800px;
  max-width: 70%;
  min-width: 200px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 2px dotted #d6589775;
  background-color: #b8fff69d;
  border-radius: 20px;
  padding: 10px 10px 30px 10px;
  padding-top: 20px;
  margin: 10px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15 px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

.x-out {
  display: flex;
  position: absolute;
  right: 3%;
  top: 5%;
  border-radius: 40px;
  padding: 3px 6px;
  font-weight: bold;
  background: rgba(128, 128, 128, 0.37);
  cursor: pointer;
}
</style>
