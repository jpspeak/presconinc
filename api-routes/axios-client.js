import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL || 'http://localhost:8000'
})

export default axiosClient
