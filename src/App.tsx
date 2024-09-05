import Logo from './components/Logo';
import Search from './components/Search';
import  MainDisplay  from './components/DisplayMain';
import DisplayDetails from './components/DisplayDetails';
import DisplayContainerDetails from './template/DisplayContainerDetails';

export default function App() {
   
   return <div className=' w-full h-full justify-between flex bg-[url("./assets/background2.jpg")] bg-cover text-white'>
    <MainDisplay/>
    <DisplayContainerDetails/>
     </div> 
}