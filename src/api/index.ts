import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_URL
})

API.interceptors.request.use(
    (config: any) => {
     
      config.headers = {
        Accept: 'application/json'
      }
      return config
    },
    (error) => console.error(error)
  )
  
export default API