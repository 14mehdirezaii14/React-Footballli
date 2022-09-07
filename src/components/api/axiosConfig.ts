import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api-football-beta.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "0437699d1emshb81897d3deb22ccp15680ajsn4266970eb200",
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  },
});
