 type useSearchWeatherProps = {
  search: String
 }

export const useSearchWeather = async ({search}:useSearchWeatherProps) => {
  const SearchSplit = search.split(" ")
  console.log(SearchSplit)
  const searchKey = import.meta.env.VITE_KEY_WEATHER_API
  console.log(searchKey)
  console.log(search)
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${searchKey}&units=metric`)
  const response = await data.json()
  return console.log(response)
}


