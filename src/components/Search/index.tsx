import { useContext, useState } from 'react'
import { useSearchWeather } from '../../hooks/useFetchCurrent'
import { SearchContext } from '../../Context/SearchContext'

const Search =  () => {
  const [searchInput,setSearchInput] = useState('')
  const {setSearch} = useContext(SearchContext)

  const handleSubmit = async() => {
    const data = await useSearchWeather({searchInput})
    setSearch(data)
  }

  return (
    <div className='h-10 border-b-2 border-white flex mb-16 '>
      <input type="text" onChange={(e) => setSearchInput(e.target.value)} className='h-full w-11/12 bg-transparent text-white focus:outline-none justify-between' />
      <svg xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        fill="currentColor" 
        className="bi bi-search text-white h-5/6 w-1/12" 
        viewBox="0 0 16 16" 
        onClick={handleSubmit}>
       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"  />
      </svg>
    </div>
  )
}

export default Search