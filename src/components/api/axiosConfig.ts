import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api-football-beta.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "6b8a658b18mshd7ddab7a603f412p148b06jsnfb1e0d39b66c",
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  },
});
