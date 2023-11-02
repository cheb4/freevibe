import axios from "axios";

const URL = "http://localhost:3005/api/data";

const getAll = () => {
  const request = axios.get(URL);
  return request.then((response) => response.data);
};

export default { getAll };
