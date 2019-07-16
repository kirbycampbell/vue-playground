
<template>
  <div class="outerMost">
    <div class="container">
      <h1>Latest Status Updates</h1>
      <div v-if="form">
        <div class="create-post">
          <p class="form-x" v-on:click="handleForm">X</p>

          <label for="create-post">Create Post</label>
          <input type="text" id="create-post" v-model="title" placeholder="Enter Title" />

          <input type="text" id="create-post" v-model="text" placeholder="Create a post" />
          <input type="text" id="create-post" v-model="image" placeholder="Paste img Src" />

          <button class="post-btn" v-on:click="createPost">Post</button>
        </div>
      </div>
      <div v-else>
        <button class="post-btn" v-on:click="handleForm">Create New Post</button>
      </div>
      <p class="error" v-if="error">{{ error }}</p>
      <div class="post-area">
        <div
          class="post"
          v-for="(post, index) in posts"
          v-bind:item="post"
          v-bind:index="index"
          v-bind:key="post._id"
        >
          {{ `${post.createdAt.getMonth()}/${post.createdAt.getDate()}/${post.createdAt.getFullYear()}`}}
          <p class="x-out" v-on:click="deletePost(post._id)">X</p>
          <h1>{{post.title}}</h1>
          <p class="text">{{ post.text}}</p>
          <img class="imgg" v-bind:src="post.image" v-bind:alt="post.image" />
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
      return store.getters.allPosts.reverse();
    }
  },
  data() {
    return {
      error: "",
      text: "",
      title: "",
      image: "",
      form: false
    };
  },
  created() {
    store.dispatch("fetchPosts");
  },
  methods: {
    createPost() {
      let params = { text: this.text, title: this.title, image: this.image };
      store.dispatch("createPost", params);
      this.form = false;
    },
    async deletePost(id) {
      store.dispatch("deletePost", id);
    },
    handleForm() {
      this.form = !this.form;
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 750px) {
  div.post-area {
    width: 95%;
    min-width: 200px;
    margin: 1% 1%;
  }
  div.container {
    width: 100%;
    margin: 0;
  }
  div.post {
    width: 100%;
    margin: 0;
  }

  button.post-btn {
    margin-top: 20px;
    width: 70%;
    height: 40px;
    border: none;
    background: rgba(126, 126, 218, 0.74);
    color: white;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 50px;
  }
}
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
  width: 100%;

  min-width: 200px;
  margin: 0 auto;
}
.post-area {
  width: 100%;
  min-width: 200px;
  margin: 0 auto;
}

.create-post {
  position: relative;
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin: 2%; */
  border: 1px solid rgba(155, 24, 90, 0.164);
  padding: 3%;
  background: rgba(143, 170, 201, 0.418);
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0.4px rgba(0, 0, 255, 0.5);
}
#create-post {
  margin: 1%;
  width: 80%;
  text-align: center;
  border: none;
  height: 30px;
  border-radius: 5px;
}

.post-btn {
  margin-top: 20px;
  width: 30%;
  height: 40px;
  border: none;
  background: rgba(126, 126, 218, 0.74);
  color: white;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50px;
}

.post-btn:hover {
  background: rgba(98, 98, 184, 0.74);
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border-top: 2px solid #d6589775;
  background-color: #062c3bbe;
  color: white;
  z-index: 10;
  padding: 6px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 750px;
  margin: auto;
  margin-top: 10px;
}
.imgg {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  min-height: 80px;
  max-height: 350px;
  max-width: 60%;
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
  font-size: 16px;
  margin-bottom: 0;
}

.form-x {
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
  z-index: 120;
}

.x-out:hover {
  background: rgba(75, 59, 59, 0.37);
}
h1 {
  color: white;
}
</style>
