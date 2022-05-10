import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
import TokenService from "./Component/Services/servicetoken";
const instance = axios.create({
  baseURL: "https://localhost:3024",
  headers: {
    "Content-Type": "application/json",
  },
})
instance.interceptors.request.use((request, _response) => {

  const token = TokenService.getAccessToken()
  request.headers = { "x-access-token": token, "Content-Type": "application/json" }
  return request
})

instance.interceptors.response.use(
  (res) => {
    console.log("hai", res)
    return res;
  },
  async (err) => {
    console.log("error", err)
    const originalConfig = err.config;
    if (err.response.status === 401) {
      console.log("error happended after 1 minutes camed ")
      if (err.response.data.message === "Unauthorized! Access Token was expired!") {
        try {
          console.log("okay", err.response.data.message)
          let refresh = TokenService.getRefreshToken()
          console.log("1 hour refresh", refresh)
          const res = await instance.post("/refresh", {
            "x-access-token": refresh,
            'content-type': 'application/json'
          });
          console.log("response===>", res?.data?.data?.token)
          TokenService.UpdateAccessToken(res?.data?.data?.token)
          instance.defaults.headers.common["x-access-token"] = res?.data?.data?.token;
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

