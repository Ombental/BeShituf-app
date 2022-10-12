import jwtDecode from "jwt-decode";
import http from "./httpService";
import {
  accessTokenKey,
  apiTokenEndpoint,
  refreshTokenKey,
} from "../utils/constants";
import secureStorage from "./secureStorageService";

export async function login(user, password) {
  const { data: tokens } = await http.post(
    apiTokenEndpoint + "auth/",
    {
      username: user,
      password: password,
    },
    { withCredentials: false }
  );
  await secureStorage.save(accessTokenKey, tokens.access);
  await secureStorage.save(refreshTokenKey, tokens.refresh);
}

export async function loginWithJwt(jwt) {
  await secureStorage.save(accessTokenKey, jwt);
}

export async function logout() {
  await secureStorage.deleteValueFor(accessTokenKey);
  await secureStorage.deleteValueFor(refreshTokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = secureStorage.getValueFor(accessTokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

const authService = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
};

export default authService;
