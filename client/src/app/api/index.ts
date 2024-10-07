import { Axios } from "axios";

const BASE_URL = "http://localhost:3000";

const api = new Axios({
  baseURL: BASE_URL,
});

export { api };
