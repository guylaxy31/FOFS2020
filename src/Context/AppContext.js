import React, { useState } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

    const [AuthLogin, setAuthLogin] = useState(false)
    const [database, setDatabase] = useState({
        username: 'rest01',
        password: '123456',
        firstname: 'ใจดี',
        lastname: 'อาหาร',
        role: 'restaurant'
    })
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    return <AppContext.Provider value={{ AuthLogin, setAuthLogin, database, setDatabase, user, setUser }}>{children}</AppContext.Provider>
};

export default AppContext