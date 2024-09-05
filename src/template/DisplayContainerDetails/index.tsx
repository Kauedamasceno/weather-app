import Search from '../../components/Search'
import DisplayDetails from '../../components/DisplayDetails'

const DisplayContainerDetails = () => {
  return (
    <aside className='h-full w-7/12 flex flex-col  text-white backdrop-blur-md p-10'
    >
      <div className='backdrop-blur-md'>
        <Search />
        <DisplayDetails/>
      </div>
    </aside>
  )
}

export default DisplayContainerDetails

