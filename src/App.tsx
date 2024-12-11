import MainDisplay from "./components/DisplayMain";
import { useLoadFetch } from "./hooks/useFetchLoading";
import DisplayContainerDetails from "./template/DisplayContainerDetails";
export default function App() {
  useLoadFetch();
  return (
    <div className='h-screen w-full flex justify-between bg-[url("./assets/background2.jpg")] bg-cover text-white max-md:flex-col max-md:h-full max-md:w-full max-md:text-black'>
      <MainDisplay />
      <DisplayContainerDetails />
    </div>
  );
}
