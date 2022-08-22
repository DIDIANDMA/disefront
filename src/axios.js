import axios from "axios";

const AXIOSCON = axios.create({
  baseURL: "http://15.164.163.31:8002",
});

export default AXIOSCON;
