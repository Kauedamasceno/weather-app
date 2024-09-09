 type useSearchWeatherProps = {
  searchInput: String
 }

export const useSearchWeather = async ({searchInput}:useSearchWeatherProps) => {
  const searchKey = import.meta.env.VITE_KEY_WEATHER_API

  searchInput = WordInput(searchInput)

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${searchKey}&units=metric`)

  if (data.status === 404) {
    return undefined
  }
  const response = await data.json()
  return response
}



/////////////////////////////////////////////////////////////////////////////////////////
//       remove blank space
const WordInput = (word:String) => {
  let wordArray = word.split(' ');
  if (wordArray[1] === '') {
    const WordSlice = wordArray.find(e => e !== '');
    if (WordSlice) word = WordSlice;
  return word;
  }
  return word;
  
}

// //const WordInput = (word:String) => {
//   let wordArray = word.split(' ')
//   console.log(wordArray)
//   if (wordArray[wordArray.length - 1] === '') {
//     const NumberLast = wordArray.lastIndexOf(" ")
//     word = wordArray.slice(0,NumberLast).join(' ')
//     console.log(word)
//   return word
//   }

//   return word
  