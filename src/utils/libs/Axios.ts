import axios from "axios";
import config from "src/config";

const CustomAxios = axios.create({
  baseURL: config.baseUrl,
});

export default CustomAxios;
