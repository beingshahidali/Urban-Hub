import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://urban-hub-expressjs-1.onrender.com",
  withCredentials: true,
});

export default apiRequest;
