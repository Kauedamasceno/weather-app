import { useContext, } from 'react'
import { DateNow } from '../../hooks/useDate'
import { useLoadFetch } from '../../hooks/useFetchLoading'
import { SearchContext } from '../../Context/SearchContext'

const ShowWeather = () => {
  useLoadFetch()
  const {search} = useContext(SearchContext)
  const date = DateNow()
    
if (search) return (
  <div className='flex'>
      <h1>{search.main.temp}</h1>
        <h2 className='inline-block mr-1'>{search.name}</h2>
        <div className='flex'>
        <p>{date}</p>
        <img src={`http://openweathermap.org/img/wn/${search.weather[0].icon}@2x.png`} alt="" />
      </div>
    </div>
 )
  
}

export default ShowWeather
