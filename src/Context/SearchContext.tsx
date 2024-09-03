import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type GlobalContent = {
  search:{
  "weather": [
    {
      "id": number,
      "main": string,
      "description": string,
    }
  ],
  "main": {
    "temp": number,
    "temp_min": number,
    "temp_max": number,
    "humidity": number,
  },
  "wind": {
    "speed": number,
  },
  "clouds": {
    "all": number
  },
  "name": string,
  },
  setSearch:Dispatch<SetStateAction<GlobalContent['search']>>
}

const GlobalState = {
  search: {},
  setSearch: ({}) => {}
} as GlobalContent

export const SearchContext = createContext(GlobalState)

type SearchProvideProps = {
  children: ReactNode
}

export const AppContext = ({children}:SearchProvideProps) => {
  const [search, setSearch] = useState<GlobalContent['search']>({
    weather: [
      {
        id: 0,
        main: '',
        description: '',
      }
    ],
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      humidity: 0,
    },
    wind: {
      speed: 0,
    },
    clouds: {
      all: 0
    },
    name: ''
  })


  return <SearchContext.Provider value={{search, setSearch}}>{children}</SearchContext.Provider>
}