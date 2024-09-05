import Search from '../../components/Search'
import DisplayDetails from '../../components/DisplayDetails'

const DisplayContainerDetails = () => {
  return (
    <aside className='bg-[url("https://wallpapers.com/images/hd/perfect-weather-with-gradient-sky-ym0nn79vhoqg34v3.jpg")]' 
    style={{backdropFilter: "blur(4px)"}}
    >
      <div className='backdrop-blur-md'>
        <Search />
        <DisplayDetails/>
      </div>
    </aside>
  )
}

export default DisplayContainerDetails