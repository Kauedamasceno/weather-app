import  MainDisplay  from './components/DisplayMain';
import DisplayContainerDetails from './template/DisplayContainerDetails';
export default function App() {
   
   return <div className=' h-full w-full justify-between flex max-md:flex-col bg-[url("./assets/background2.jpg")] bg-cover text-white max-sm:h-full max-sm:w-full '>
    <MainDisplay/>
    <DisplayContainerDetails/>
     </div> 
}