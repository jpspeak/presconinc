import useSWR from 'swr'
import projectAPI, { getAllPath } from '../api-routes/project'

const useProjects = (initialData, query) => {
  const { data, error, mutate } = useSWR(
    [getAllPath(), query],
    () => projectAPI.getAll(query).then(res => res.data),
    { fallbackData: initialData }
  )

  return { projects: data, projectsError: error, mutateProjects: mutate }
}

export default useProjects
