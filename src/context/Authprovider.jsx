import React, { createContext, useEffect, useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext=createContext()

const Authprovider = ({children}) => {


    const [userData, setUserData] = useState(null)


    // setUserData(getLocalStorage())
    // console.log(data.employees)

    useEffect(()=>{
      setLocalStorage()
        const{employees,admin}=getLocalStorage()
        setUserData({employees,admin})
    },[])
   

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default Authprovider