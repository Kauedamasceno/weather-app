import type { Meta, StoryObj } from '@storybook/react';

import Search from '.';
// import { useContext } from 'react';
// import { SearchContext } from '../../Context/SearchContext';
// import { useSearchWeather } from '../../hooks/useFetchCurrent';

const meta = {
  title: "Search",
  component: Search,
//   decorators: [
//     (Story) => {
//       const {search,setSearch} = useContext(SearchContext)
//       return (
//         <div>
//           <Story><input type="text" onChange={(e) => setSearch(e.target.value)} className='h-full w-11/12 bg-transparent text-white focus:outline-none justify-between' />
//       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white h-5/6 w-1/12" viewBox="0 0 16 16" onClick={() => useSearchWeather({search})}>
//   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"  />
// </svg></Story>
//         </div>
//       )
//     }
//   ]
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story =  {
  parameters: {
    backgrounds: {default: 'light'}
  }
}

export const Second: Story =  {
  parameters: {
    backgrounds: {default: 'dark'}
  }
}