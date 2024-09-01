import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type GlobalContent = {
  search:String,
  setSearch:Dispatch<SetStateAction<String>>
}

const GlobalState = {
  search: '',
  setSearch: (s: String) => {}
} as GlobalContent

export const SearchContext = createContext(GlobalState)

type SearchProvideProps = {
  children: ReactNode
}

export const AppContext = ({children}:SearchProvideProps) => {
  const [search, setSearch] = useState<String>('')


  return <SearchContext.Provider value={{search, setSearch}}>{children}</SearchContext.Provider>
}