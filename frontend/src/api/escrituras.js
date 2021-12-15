import axios from "axios"
import { API_HOST } from "../utils/constant"

export const getEscrituras = () => {
  const url = `${API_HOST}/escrituras`
  return axios.get(url)
}

export const createEscrituraAPI = (escritura) => {
  const url = `${API_HOST}/addEscritura`
  const data = {...escritura}
  return axios.post(url, data)
}