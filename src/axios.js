import axios from "axios";

// create an instance of axios fetch method to grab baseURL. 
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

