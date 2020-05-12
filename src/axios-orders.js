import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-ce8ef.firebaseio.com/",
});

export default instance;
