import Axios, { AxiosError } from 'axios'

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3000/api/'

var axios = Axios.create({
  withCredentials: true,
})

export const httpService = {
  get<T>(endpoint: string, data: T | null = null) {
    return ajax(endpoint, 'GET', data)
  },
  post<T>(endpoint: string, data: T | null = null) {
    return ajax(endpoint, 'POST', data)
  },
  put(endpoint: string, data: any) {
    return ajax(endpoint, 'PUT', data)
  },
  delete<T>(endpoint: string, data: T | null) {
    return ajax(endpoint, 'DELETE', data)
  },
}

async function ajax<T>(
  endpoint: string,
  method = 'GET',
  data: T | null = null
) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === 'GET' ? data : null,
    })
    return res.data
  } catch (err: AxiosError | any) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`,
      data
    )
    throw err
  }
}
