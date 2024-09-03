import { useContext } from 'react'
import { SearchContext } from '../../Context/SearchContext'

export const MainDisplay = () => {

  const {search} = useContext(SearchContext)

  return (
    <main className='text-8xl text-white'>
      {
      search.name === undefined || search.name === '' ? 'Type a city name and click search' : search.name	
}
          
    </main>
  )
}