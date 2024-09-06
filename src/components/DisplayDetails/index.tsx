import { useContext } from 'react'
import { SearchContext } from '../../Context/SearchContext'

const DisplayDetails = () => {

  const {search} = useContext(SearchContext)

  return (
    <div className='h-full w-full flex flex-col  text-white backdrop-blur-3xl'>
      <p className='mb-10'>Weather Details...</p>
      <div>
        <h2 className='w-full mb-14 font-bold'>{search.weather[0].description.toUpperCase()}</h2>
            <div className='flex justify-between mb-14'>
              <p>Temp max</p>
              <span className='flex items-center'>{Math.floor(search.main.temp_max)}&deg; 
               <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" 
                fill="currentColor" 
                className="bi bi-thermometer-high ml-1 text-red-900" 
                viewBox="0 0 16 16">
                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415"/>
                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
               </svg>
              </span>
            </div>


            <div className='flex justify-between mb-14'>
              <p>Temp min</p>
              <span className='flex items-center'>{Math.floor(search.main.temp_min)}&deg;
               <svg  xmlns="http://www.w3.org/2000/svg" 
               width="16" 
               height="16" 
               fill="currentColor" 
               className="bi bi-thermometer ml-1 text-blue-600" 
               viewBox="0 0 16 16">
               <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
               <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z"/>
               </svg>  
            </span>
            </div>


            <div className='flex justify-between mb-14'>
              <p>Humadity</p>
              <span className='flex items-center'>{Math.floor(search.main.humidity)}%
               <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="bi bi-droplet ml-1" 
                viewBox="0 0 16 16">
                <path 
                  fill-rule="evenodd" 
                  d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                <path 
                  fill-rule="evenodd" 
                d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
               </svg>
              </span>
            </div>


            <div className='flex justify-between mb-14'>
              <p>Cloudy</p>
              <span className='flex items-center'>{Math.floor(search.clouds.all)}%
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor" 
              className="bi bi-clouds ml-1" 
              viewBox="0 0 16 16">
                <path 
                  d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.5 3.5 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.6 5.6 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5"/>
                <path 
                  d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.5 4.5 0 0 1 7 5m3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492z"/>
              </svg>  
             </span>
            </div>


            <div className='flex justify-between mb-14'>
              <p>Wind</p>
             <span className='flex items-center'>{Math.floor(search.wind.speed)}km/h 
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" 
                fill="currentColor" 
                className="bi bi-wind ml-1" 
                viewBox="0 0 16 16">
                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
              </svg>
             </span>
            </div>
        </div>
    </div>
  )
}

export default DisplayDetails


// import React from 'react'

// type DisplayDetailsProps = {}

// const DisplayDetails = (props: DisplayDetailsProps) => {
//   return (
//     <div className='h-full w-full flex flex-col items-center justify-center text-white'>
//       <p className='mb-10'>Weather Details...</p>
//       <div>
//         <table>
//           <thead className='w-full'>
//             <tr className='w-full'>
//               <th className='h-40 mb-20 w-full'>ThunderStorm with light drizzle</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th>Temp max</th>
//               <td>19</td>
//             </tr>
//             <tr>
//               <th>Temp min</th>
//               <td>11</td>
//             </tr>
//             <tr>
//               <th>Humadity</th>
//               <td>86%</td>
//             </tr>
//             <tr>
//               <th>Cloudy</th>
//               <td>86%</td>
//             </tr>
//             <tr>
//               <th>Wind</th>
//               <td>%km/h</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default DisplayDetails