 import axios from "axios";
import Cookies from "js-cookie";

// const CreateApiInterceptor = () => {


const customAxios = axios.create({ baseURL: `${import.meta.env.VITE_API_ENDPOINT}` });

//   axiosApiInstance.interceptors.request.use(
//     async (config) => {
//       config.headers = {
//         Authorization: `Bearer ${accessToken}`,
//         Accept: "application/json",
//         "Content-Type": "application/x-www-form-urlencoded",
//       };
//       return config;
//     },
//     (error) => {
//       Promise.reject(error);
//     }
//   );

//   return axiosApiInstance;
// };

// export default CreateApiInterceptor;





const requestHandler = request => {
  // Token will be dynamic so we can use any app-specific way to always   
  // fetch the new token before making the call
  request.headers.Authorization = `Bearer ${Cookies.get("token")}`;  
  

  return request;  
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

export default customAxios


