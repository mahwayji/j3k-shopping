import { ACCESS_TOKEN } from '@/constants/cookie'
import axios from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? import.meta.env.VITE_BACKEND_URL : 'http://localhost:4000/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(function (config) {
  const token = cookies.get(ACCESS_TOKEN)

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
