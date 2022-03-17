import axios from "axios";

const API_PORT = process.env.REACT_APP_API_PORT || 5000;
const API_URL = process.env.REACT_APP_API_URL || "http://localhost";

const APP_API_URL = `${API_URL}:${API_PORT}/`;

export const get = (path) => {
  return axios.get(APP_API_URL + path);
};

export const post = (path, body) => {
  return axios.post(APP_API_URL + path, { ...body });
};

export const put = (path, body) => {
  return axios.put(APP_API_URL + path, { ...body });
};

export const del = (path) => {
  return axios.delete(APP_API_URL + path);
};
