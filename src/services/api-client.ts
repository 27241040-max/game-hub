import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "79b26e24e1614a13ad90b50f8e70e6a1",
  },
});
