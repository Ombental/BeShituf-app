import axios from "axios";
// import logger from "./logService";
import qs from "qs";
import { objToSnakeCase } from "../utils/standartization";
import {
  accessTokenKey,
  apiTokenEndpoint,
  refreshTokenKey,
} from "../utils/constants";
import secureStorage from "./secureStorageService";

let isTokenRefreshing = false;
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = "http://10.0.0.7:8000";
axios.defaults.headers.common["Content-Type"] = "application/json";

// axios.interceptors.request.use(
//   (request) => {
//     console.log("bbbbbb");
//     const accessToken = getAccessToken();
//     if (accessToken) {
//       request.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// const refreshAccessToken = async () => {
//   const refreshToken = getRefreshToken();
//   if (refreshToken && !isTokenRefreshing) {
//     isTokenRefreshing = true;
//     return axios.post(apiTokenEndpoint + "refresh/", {
//       refresh: refreshToken,
//     });
//   }
// };

axios.interceptors.response.use((response) => {
  return response;
  // },
});
//   async (error) => {
//     const expectedError =
//       error.response &&
//       error.response.status >= 400 &&
//       error.response.status < 500;

//     if (!expectedError) {
//       // logger.log("unexpected error", error);
//       console.log("unexpected error", error);
//     } else if (
//       error.response &&
//       error.response.status === 401 &&
//       !error.config.url.includes("refresh") &&
//       getRefreshToken()
//     ) {
//       const originalRequest = error.config;
//       if (!isTokenRefreshing) {
//         try {
//           const { data } = await refreshAccessToken();
//           const accessToken = data.access;
//           if (accessToken) {
//             isTokenRefreshing = false;
//           }
//           secureStorage.save(accessTokenKey, accessToken);
//           originalRequest.headers["Authorization"] = "Bearer " + accessToken;
//           return axios(originalRequest);
//         } catch (ex) {
//           window.location = "/logout";
//         }
//       } else if (isTokenRefreshing) {
//         if (!originalRequest.url.includes(apiTokenEndpoint + "refresh")) {
//           originalRequest.headers["Authorization"] =
//             "Bearer " + getAccessToken();
//           return axios(originalRequest);
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export async function getAccessToken() {
//   console.log("wwwww");
//   const value = await secureStorage.getValueFor(accessTokenKey);
//   console.log("rrrrrr" + " 1 " + value);
//   return value;
// }

// export async function getRefreshToken() {
//   const value = await secureStorage.getValueFor(refreshTokenKey);
//   return value;
// }

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  objToSnakeCase,
  stringify: qs.stringify,
};

export default http;
