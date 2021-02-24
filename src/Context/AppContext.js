import React, { useState } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

    const [AuthLogin, setAuthLogin] = useState(false)
    const [database, setDatabase] = useState({
        username: 'cust01',
        password: '123456',
        firstname: 'ใจดี',
        lastname: 'อาหาร',
        role: 'customer',
        gender: 'male',
        age: '25',
        career: 'ฟรีแลนซ์',
        careerDetail: '',
        phonenumber: '0999999999',
        email: 'cust@emailcom',
    })
    const [user, setUser] = useState({
        username: '',
        password: '',
    })


    return <AppContext.Provider value={{ AuthLogin, setAuthLogin, database, setDatabase, user, setUser }}>{children}</AppContext.Provider>
};

export default AppContext