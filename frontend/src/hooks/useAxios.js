import useSWR from 'swr'
import { api } from '../../utils/api'

export function useAxios(url) {
  const { data, error, mutate } = useSWR(url, async url => {
    const response = await api.get(url)

    return response.data
  })

  return { data, error, mutate }
}