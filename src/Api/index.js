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

  export const getAllJobs = async () => {
    try {
      const res = await axios.get(`${baseURL}get/jobs`);
      return res;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      return error;
    }
  }

  export const getAllUsers = async () => {
    try {
      const res = await axios.get(`${baseURL}user/get`);
      return res;
    } catch (error) {
      console.error("Error fetching users:", error);
      return error;
    }
  }

  export const createJobs = async (data) => {
      try {
        const res = await axios.post(`${baseURL}create/jobs`, data, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return res;
      } catch (error) {
        console.error("Error creating job:", error);
        return error;
      }
  
  }