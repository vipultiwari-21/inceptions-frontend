import axios from "axios";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

const CreateApiInterceptor = () => {
  //  const ciphertext=window.localStorage.getItem("token")
  //  var bytes  = CryptoJS.AES.decrypt(ciphertext, 'ilovervce');

  // const accessToken=bytes.toString(CryptoJS.enc.Utf8);
  // console.log("Access Token : "+accessToken)

  const accessToken = Cookies.get("token");

  const axiosApiInstance = axios.create({ baseURL: process.env.REACT_APP_API });
  axiosApiInstance.interceptors.request.use(
    async (config) => {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      };
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return axiosApiInstance;
};

export default CreateApiInterceptor;
