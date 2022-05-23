import axiosClient from "./AxiosClient";
import { apiUrl } from "../constant";

class AuthAPI {
  getAccount = (params) => {
    const url = `${apiUrl}/auth/login`;
    return axiosClient.post(url, params);
  };

  createAccount = (params) => {
    const url = `${apiUrl}/auth/register`;
    return axiosClient.post(url, params);
  };

  logout = (params) => {
    localStorage.removeItem("authTokens");
    const url = "api/auth/lout";
    return axiosClient.get(url, params);
  };
}

const authAPI = new AuthAPI();
export default authAPI;
