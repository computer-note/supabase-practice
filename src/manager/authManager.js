const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_790d8d9b3a4d';

function getLoginState() {
  return localStorage.getItem(ACCESS_TOKEN_KEY) ? true : false;
}

function setLogout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function setAccessToken(accessToken) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

const authManager = {
  getLoginState,
  setLogout,
  getAccessToken,
  setAccessToken,
};

export default authManager;
