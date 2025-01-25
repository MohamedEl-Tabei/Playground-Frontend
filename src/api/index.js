import axios from "axios";
const REQUEST = axios.create({
  baseURL: "https://playground-server-m7ug.onrender.com/",
});
//const REQUEST=axios.create({baseURL:"http://localhost:5000/"})
export default REQUEST;
