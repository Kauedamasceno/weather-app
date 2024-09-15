import { useContext, useEffect, useState } from 'react'
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
    <div className='h-10 mb-4 border-b-2 flex items-between border-white'>
      <input type="text" onChange={(e) => setSearchInput(e.target.value)} className='h-full w-11/12 justify-between bg-transparent text-white focus:outline-none' />
      <button onClick={handleSubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        fill="currentColor" 
        className="bi bi-search h-5/6 w-1/12 text-white w-full h-full" 
        viewBox="0 0 16 16" 
        >
       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"  />
      </svg>
      </button>
      
    </div>
  )
}

export default Search