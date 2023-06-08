import axios from "redaxios";

export const Http = axios.create({
  baseURL: "http://api.TechLong.com.br",
});
