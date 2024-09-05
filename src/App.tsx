import Logo from './components/Logo';
import Search from './components/Search';
import  MainDisplay  from './components/DisplayMain';

export default function App() {
   
   return <div className='bg-red-400 w-full h-full flex justify-center items-center'>
       <h1 className="text-3xl font-bold underline"> Hello world!</h1>
    <Logo nameLogo='oioi'/>
    <Search/>
    <MainDisplay/>
     </div> 
}