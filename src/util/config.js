import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://17.yaojunrong.com/api/',
  timeout: 5000
})

export default instance;
