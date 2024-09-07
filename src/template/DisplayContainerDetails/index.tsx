import Search from '../../components/Search'
import DisplayDetails from '../../components/DisplayDetails'

const DisplayContainerDetails = () => {
  return (
    <aside className='h-full w-7/12 flex flex-col  text-white backdrop-blur-md p-10  max-md:w-full max-sm:w-full max-md:h-full max-sm:p-7'
    >
      <div className='backdrop-blur-md h-full'>
        <Search />
        <DisplayDetails/>
      </div>
    </aside>
  )
}

export default DisplayContainerDetails

