import axios from "axios";
import { getToken } from "../auth";

export const BASE_URL = "http://localhost:8080";

//axios provider (Object)
export const myAxios = axios.create({
  baseURL: BASE_URL,
});

// using for server calling

// for private url which we need to given token in header
export const privateAxios = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  //   Authorization: "Bearer <token_here>",
  // },
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();
    //console.log(token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      console.log(config);
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// privateAxios.interceptors.request.use(config=>{

// })
