import axios, { AxiosInstance } from "axios";
import { config } from "../config";

const apiClient: AxiosInstance = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: config.API_TIMEOUT
});

export { apiClient };
