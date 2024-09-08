import Search from '../../components/Search'
import DisplayDetails from '../../components/DisplayDetails'

const DisplayContainerDetails = () => {
  return (
    <aside className='flex flex-col w-full md:w-7/12 h-full p-7  text-white backdrop-blur-md'> 
        <Search />
        <DisplayDetails/>
    </aside>
  )
}

export default DisplayContainerDetails

