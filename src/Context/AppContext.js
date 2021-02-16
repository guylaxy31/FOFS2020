import React, { useState } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

    const [AuthLogin, setAuthLogin] = useState(false)
    const [database, setDatabase] = useState({
        username: 'cust01',
        password: '123456',
        firstname: 'ใจดี',
        lastname: 'ซื้ออาหาร',
        role: 'customer'
    })

    return <AppContext.Provider value={{ AuthLogin, setAuthLogin, database, setDatabase }}>{children}</AppContext.Provider>
};

export default AppContext