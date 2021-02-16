import React, { useState } from 'react'

const DatabaseContext = React.createContext();

export const AppProvider = ({ children }) => {

    const [database, setDatabase] = useState({
        username: 'cust01',
        password: '123456',
        role: 'customer'
    })

    return <AppContext.Provider value={{ database, setDatabase }}>{children}</AppContext.Provider>
};

export default DatabaseContext