import  MainDisplay  from './components/DisplayMain';
import DisplayContainerDetails from './template/DisplayContainerDetails';
export default function App() {
   
   return <div className=' h-full w-full flex justify-between bg-[url("./assets/background2.jpg")] bg-cover text-white max-md:flex-col max-sm:h-full max-sm:w-full '>
    <MainDisplay/>
    <DisplayContainerDetails/>
     </div> 
}