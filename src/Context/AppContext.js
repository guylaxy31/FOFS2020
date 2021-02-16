import React, { useState } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

    const [AuthLogin, setAuthLogin] = useState(false)

    return <AppContext.Provider value={{ AuthLogin, setAuthLogin }}>{children}</AppContext.Provider>
};

export default AppContext