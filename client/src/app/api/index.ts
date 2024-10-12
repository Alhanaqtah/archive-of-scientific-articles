import axios, { Axios } from "axios";

const BASE_URL = "http://localhost:3000";

const api = new Axios({
  baseURL: BASE_URL,
  transformRequest: axios.defaults.transformRequest,
  transformResponse: axios.defaults.transformResponse,
});

export { api };
