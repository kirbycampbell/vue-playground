import Vue from "vue";
import Vuex from "vuex";
import PostService from "./PostService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts;
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      let retPosts = await PostService.getPosts();
      commit("setPosts", retPosts);
    },
    async createPost({ commit }, params) {
      await PostService.insertPost(params);
      let retPosts = await PostService.getPosts();
      commit("setPosts", retPosts);
    },
    async deletePost({ commit }, id) {
      await PostService.deletePost(id);
      let retPosts = await PostService.getPosts();
      commit("setPosts", retPosts);
    }
  }
});
