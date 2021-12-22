import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.10.3:9000/api",
});
//exp://192.168.10.3:19000
export default apiClient;
