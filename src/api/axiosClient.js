import axios from "axios";

// let baseURL = "http://localhost:3000/";
let baseURL = "http://10.0.2.2:3000/";
// let baseURL = "http://192.168.1.87/3000";
// let baseURL = "http://127.0.0.1:3000/";
// let baseURL = "https://minimarket-server.onrender.com/";

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  //   const token = await store.getToken();
  //   config.headers.token = "Bearer " + token;
  // config.headers.token =
  // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGFjYjllOTI3YTBhOTA1NDVjNmU5YyIsInBob25lTnVtYmVyIjoiMDk5OTk5OTk5OSIsIm5hbWUiOiJDb25nIFZhbiBIb2FuZyIsImlhdCI6MTY2NTg0NjY1NywiZXhwIjoxNjY4NDM4NjU3fQ.uHTFL3YsjiW-eIE-X_qgF2_eATqqSOvw3Mm-kNbBF1A";

  // handle token here
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log("Response Error:", error.response);
    return error.response;
  }
);

export default axiosClient;
