import axiosClient from './axios-client'

export const getAllPath = () => '/projects'

const getAll = query => axiosClient.get(getAllPath(), { params: query })

const projectAPI = {
  getAll
}

export default projectAPI
