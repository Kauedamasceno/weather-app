import Search from '../../components/Search'
import DisplayDetails from '../../components/DisplayDetails'

const DisplayContainerDetails = () => {
  return (
    <aside className='h-full w-full p-7 flex flex-col text-white backdrop-blur-md md:w-7/12'> 
        <Search />
        <DisplayDetails/>
    </aside>
  )
}

export default DisplayContainerDetails

