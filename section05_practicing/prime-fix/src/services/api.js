import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "81ffb4c1be9af05572332d4e8b876556",
  }
});

export default api;
