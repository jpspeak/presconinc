import axiosClient from './axios-client'

export const getAllPath = () => '/properties'

const getAll = query => axiosClient.get(getAllPath(), { params: query })

const propertyAPI = {
  getAll
}

export default propertyAPI
