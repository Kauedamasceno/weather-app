 type useSearchWeatherProps = {
  searchInput: String
 }

export const useSearchWeather = async ({searchInput}:useSearchWeatherProps) => {
  const searchKey = import.meta.env.VITE_KEY_WEATHER_API

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${searchKey}&units=metric`)

  if (data.status === 404) {
    return undefined
  }
  const response = await data.json()
  return response
}

