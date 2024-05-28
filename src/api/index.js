import axios from "axios"
import SECRET from "../secret"
const REQUEST=axios.create({baseURL:`${SECRET.url}`})
export default REQUEST