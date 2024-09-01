import { useContext } from 'react'
import { SearchContext } from '../../Context/SearchContext'

export const MainDisplay = () => {

  const {search} = useContext(SearchContext)

  return (
    <main className='text-8xl'>{search}</main>
  )
}