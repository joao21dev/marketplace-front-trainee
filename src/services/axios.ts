import axios from 'axios'
import { apiUrl } from '../env'

const api = axios.create({
  baseURL: apiUrl
})

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint).catch((error) => {
    return error.response
  })
  return data
}

export const updateData = async (endpoint: string, obj: any) => {
  const { data } = await api.patch(endpoint, obj).catch((error) => {
    return error.response
  })
  return data
}

export const deleteData = async (endpoint: string) => {
  const { data } = await api.delete(endpoint).catch((error) => {
    return error.response
  })

  return data
}

export const createData = async (endpoint: string, obj: any) => {
  const { data } = await api.post(endpoint, obj).catch((error) => {
    return error.response
  })
  return data
}
