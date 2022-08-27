import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api-football-beta.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "0bef6c4a0dmsha116b93986863dep1591eajsna59c2034cb40",
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  },
});
