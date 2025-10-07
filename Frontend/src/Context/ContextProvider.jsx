import React, { createContext, useContext, useState } from 'react'

const Context = createContext();

export const ContextProvider = ({children}) => {
  const [Isopen,setIsOpen] = useState(false);
  
  return (
    <Context.Provider value={{Isopen,setIsOpen}}>
      {children}
    </Context.Provider>
  )
}

export const UseContextProvider = () => useContext(Context);
