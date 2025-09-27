import axios from "axios";

const BASE_URL='https://dummyjson.com/'

export const AxiosInstance = axios.create({
  baseURL: BASE_URL
});