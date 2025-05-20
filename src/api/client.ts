import axios from "axios";


export const client = axios.create({
  baseURL: "http://api.github.com/",
  timeout: 2000, 
  headers: {
    "Content-Type": "application/json",
  
  },
  withCredentials: false
});

