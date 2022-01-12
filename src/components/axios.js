import axios from "axios";
import { apiKey, baseUrl } from "../constants/constants";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
