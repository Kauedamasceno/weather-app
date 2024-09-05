import { useContext, useEffect } from 'react'
import { SearchContext } from '../Context/SearchContext'
import { useSearchWeather } from './useFetchCurrent'

export const useLoadFetch = () => {
  const {search,setSearch} = useContext(SearchContext)

 useEffect(() => {
    const fetchData = async () => {
    // fetch weather data from API
    const data = await useSearchWeather({searchInput: 'new york'})
    setSearch(data) 
  }
  fetchData()
},[])

  return {search}
}


