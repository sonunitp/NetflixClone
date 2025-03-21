import React, { useState } from 'react';
import Header from './Header'


const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName,setFullName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
 const loginHandler= () =>{
   setIsLogin(!isLogin);
 }
   const getInputData=(e)=>{
    e.preventDefault();
    console.log(fullName,email,password);
   }
 

  return (
    <div>
      <Header />
      <div className='absolute'>

        <img className='w-[100vw] h-[100vh]' src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_v7OKqNfnRrHMHL7dpiLw-dErkYX-chZ43FRKLx-KsGSR2WyoSgOJN_H86eN7Ew4AbFX107wcwwCv9eLwEgKbw06dHMkYYdBfaZNNnzHkLRY7VdjoIU835bhnkkuMJj2cTC-Yo=w919-h516-p-k-no-nu" alt="banner" />
        </div>
      <form onSubmit ={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-70' >
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
        <div className='flex flex-col'>
          {
            !isLogin && <input  value={fullName} onChange={(e)=>setFullName(e.target.value)}type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
          }
          <input value={email} onChange={(e)=>setEmail(e.target.value)}type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />

          <input value={password}onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
          <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font medium'>{isLogin?"Login":"Signup"}
          </button>
          <p className='text-white'>{isLogin ? "New to Netflix ?":"Already have an account ?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-bold cursor-pointer'> {isLogin ? "Signup" : "Login"}</span></p>
        </div>
      </form>
    </div>
  )
}
export default Login