import { useState } from 'react'
import AppContext from './appContext';

const AppContextProvider = (props) => {
  const [sidebarData, setSidebarData] = useState([]);
  return (
    <AppContext.Provider
      value={{
        sidebarData, setSidebarData
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
