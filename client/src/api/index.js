import axios from "axios";  //cu axios facem cereri api

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use(req => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = newPost => API.post("/posts", newPost);
export const likePost = id => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = id => API.delete(`/posts/${id}`);

export const signIn = form => API.post("/user/signin", form);
export const signUp = form => API.post("/user/signup", form);
