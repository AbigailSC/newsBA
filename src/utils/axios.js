import axios from "axios";

const apikey = import.meta.env.VITE_APP_NEW_API_KEY;

const instance = axios.create();

instance.defaults.baseURL = `${import.meta.env.VITE_APP_BASE_URL}`;
instance.defaults.params = {
  access_key: apikey,
};