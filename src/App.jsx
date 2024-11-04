import React, {useContext, useEffect, useState} from 'react'
import { Login } from './components/Auth/Login'
import { getLocalStorage } from './utils/localStorage'
import AdminDasboard from './components/Dashboard/AdminDasboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/Authprovider'
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
// import AdminDasboard from './components/Dashboard/AdminDasboard'


const App = () => {

  const [user, setuser]=useState(null)
  const [logedInUserData, setloggedInUserData]=useState(null)
  const authData=useContext(AuthContext)
  // console.log(authData)
//  useEffect(()=>{
//   const logedInUser=localStorage.getItem('loggedInUser')
//     if(logedInUser){
//       const userData=JSON.parse(logedInUser)
//       setUser(userData.role)
//       setloggedInUserData(userData.data)
//     }
//  },[])
 
 
  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setuser('admin')
    }else if(authData){
      const employee = authData.employees?.find((e) => email === e.email && e.password === password);
      if (employee) {
        setuser('employee');
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }
  }
    else{
      alert("invalid credetials")
    }
  }


  // const data=useContext(AuthContext)
  // console.log(data)
  return (
    <>
      {!user ?<Login handleLogin={handleLogin}/>:''}
      {user =='admin'? <AdminDasboard changeUser={setuser}/> : (user == 'employee' ?<EmployeeDashboard changeUser={setuser} data={logedInUserData}/>:null)}
      {/* <EmployeeDashboard/>
      <AdminDasboard/> */}
    </>
  )
}

export default App