import axios from "axios";

const URL = "http://localhost:3005/api/data";

const getAll = (dateObject) => {
  const request = axios.post(URL, dateObject);
  return request.then((response) => response.data);
};

export default { getAll };
