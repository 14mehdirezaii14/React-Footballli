import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api-football-beta.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "7f6f6cea8cmsh5f0c1be9deaaf9bp145633jsn354fcc9716d0",
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  },
});
