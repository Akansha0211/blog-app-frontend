import axios from "axios";

export const BASE_URL = "http://localhost:8080";

//axios provider (Object)
export const myAxios = axios.create({
  baseURL: BASE_URL,
});

// using for server calling
