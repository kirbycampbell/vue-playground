import axios from "axios";

const url = "https://sleepy-badlands-25452.herokuapp.com/api/posts/";

// const url = "http://localhost:5000/api/posts/";

class PostService {
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static insertPost(text, title, image) {
    return axios.post(url, {
      text: text,
      title: title,
      image: image
    });
  }

  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
