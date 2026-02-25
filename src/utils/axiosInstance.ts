import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  headers: {
    Authorization: `Bearer super-secret-doodle-token`,
  },
});

export default axiosInstance;
