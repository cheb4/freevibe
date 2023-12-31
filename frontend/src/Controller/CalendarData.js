import axios from "axios";

const URL = "http://localhost:3005/api/data";

const getAll = (dateObject) => {
  const request = axios.post(URL, dateObject);
  return request.then((response) => response.data);
};
const freeUser = (data) => {
  const request = axios.post("http://localhost:3005/api/data/free", data);
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, freeUser };
