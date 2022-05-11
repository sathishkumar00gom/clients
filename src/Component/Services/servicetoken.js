


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
  return JSON.parse(localStorage.getItem("refreshToken"))
}

const UpdateAccessToken = (token) => {
  let user = JSON.parse(localStorage.getItem("accessToken"));
  console.log("older access token", user)
  user = token
  console.log("user new access token", user)
  localStorage.setItem("accessToken", JSON.stringify(user));
}
const TokenService = {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
  UpdateAccessToken,
}

export default TokenService;
