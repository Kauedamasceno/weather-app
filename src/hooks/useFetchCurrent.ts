import { useContext, useState } from 'react'
import { SearchContext } from '../Context/SearchContext'

 type useSearchWeatherProps = {
  searchInput: String
 }






export const useSearchWeather = async ({searchInput}:useSearchWeatherProps) => {
  console.log(searchInput)
  const SearchSplit = searchInput.split(" ")
  console.log(SearchSplit)
  const searchKey = import.meta.env.VITE_KEY_WEATHER_API
  console.log(searchKey)
  console.log(searchInput)
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${searchKey}&units=metric`)
  const response = await data.json()
  console.log(response)
  return response
}


