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
      <h1 className='text-8xl'>{Math.floor(search.main.temp)}&deg; </h1>
        <div className='flex flex-col justify-end ml-3'>
        <h2 className='inline-block mr-1 text-6xl'>{search.name}</h2>
        <p className='text-2xl'>{date}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${search.weather[0].icon}@2x.png`} alt="" className='h-24'/>
    </div>
 )
  
}

export default ShowWeather
