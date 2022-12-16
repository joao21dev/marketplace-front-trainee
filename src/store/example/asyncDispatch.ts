import axios from 'axios'
import { incrementByAmount } from './reducer'

export const getCountAsync = () => async (dispatch: any) => {
  const API_URL = 'urlDaApi'
  try {
    const response = await axios.get(`${API_URL}`)
    dispatch(incrementByAmount(response.data))
  } catch (err: any) {
    throw new Error(err)
  }
}
