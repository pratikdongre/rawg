import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e6fd15f63d414af48d3180057b543f19",
  },
});
