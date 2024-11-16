import axios from "axios";

export const API_HOST = "http://194.87.186.59:8082";

const fetch = {
  post: async (path, data, options) =>
    axios.post(`${API_HOST}${path}`, data, {
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    }),
  get: async (path, data, options) =>
    axios.get(`${API_HOST}${path}`, data, {
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    })
};

export default fetch;
