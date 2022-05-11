import axios from "axios";

export const axiosInstance = axios.create({
  //baseURL: "https://band-cs322.herokuapp.com/api"
  baseURL: "http://localhost:8800/api",
});
