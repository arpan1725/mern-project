import React, { useState } from 'react'

export const Login = ({handleLogin}) => {
  // console.log(handleLogin)
   
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

   const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    console.log("email is",email)
    console.log("password is",password)

    setemail("")
    setpassword("")

   }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        
        className='flex flex-col items-center justify-center'>
          <input
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
            // console.log(e.target.value)
          }}
           required 
           
           className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'type="email" placeholder='Enter your email'
            />
          <input
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
            required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
          <button  className='text-white border-none outline-none   bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white' type="submit">Login</button> {/* Optional submit button */}
        </form>
      </div>
    </div>
  )
}
