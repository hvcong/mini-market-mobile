import axios from "axios";
import axiosClient from "./axiosClient";

class AuthApi {
  // login
  login(phoneOrEmail, password) {
    let url = "auth/login";
    console.log(phoneOrEmail, password);
    return axiosClient.post(url, {
      phonenumber: phoneOrEmail,
      password,
    });
  }
}

const authApi = new AuthApi();
export default authApi;
