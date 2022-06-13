import useSWR from 'swr'
import propertiesAPI, { getAllPath } from '../api-routes/property'

const useProperties = (initialData, query) => {
  const { data, error, mutate } = useSWR(
    [getAllPath(), query],
    () => propertiesAPI.getAll(query).then(res => res.data),
    { fallbackData: initialData }
  )

  return { properties: data, propertiesError: error, mutateProperties: mutate }
}

export default useProperties
