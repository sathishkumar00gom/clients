


const setAccessToken = (user) => {
  localStorage.setItem("accessToken", JSON.stringify(user));
}


const setRefreshToken = (user) => {
  localStorage.setItem("refreshToken", JSON.stringify(user));
}

const getAccessToken = () => {
  return JSON.parse(localStorage.getItem("accessToken"))
}
const getRefreshToken = () => {
  return JSON.parse(localStorage.getItem("RefreshToken"))
}

const TokenService = {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken
}

export default TokenService;
