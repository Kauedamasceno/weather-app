
import Logo from '../Logo'
import ShowWeather from '../ShowWeather' 

const DisplayMain = () => {
  return (
    <div className='h-full w-full p-14 pt-4 flex flex-col justify-between '>
      <Logo nameLogo='Weather Kauê'/>
      <ShowWeather/>
    </div>
  )
}

export default DisplayMain