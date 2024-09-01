
export const useSearchWeather = async (props: String) => {
  const searchKey = import.meta.env.VITE_KEY_WEATHER_API
  console.log(searchKey)
  console.log(props)
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props}&appid=${searchKey}&units=metric&lang=pt_br`)
  const response = await data.json()
  return console.log(response)
}