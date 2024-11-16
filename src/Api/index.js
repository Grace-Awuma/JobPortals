import axios from "axios";


export const baseURL = "http://localhost:3005/api/"


export const loginUser = async (data) => {
    try {
      const res = await axios.post(`${baseURL}user/login`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
       return res;
      } catch (error) {
        console.error("Error during login:", error);
        return error;
      }
  }