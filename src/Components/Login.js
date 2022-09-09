import React, { useState ,useEffect } from "react";
import "./Login.css";

import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [active,setActive] = useState(false);
  const[phone,setPhone] = useState('');
  const dispatch = useDispatch();
  let user = {
    name:name,
    email:email,
    password:password,
    cpassword:cpassword,
    phone:phone
  }
   
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        phone:phone,
        cpassword:cpassword,
        loggedIn: true,
      }),
      
    );
    
    setEmail("");
    setPassword("");
  };
  const handleclick = ()=>{
    localStorage.setItem(JSON.stringify(user),"formdata")
  }
  useEffect(()=>{
    handleclick();
   },[]);


  return (
    <div className="login">
      <form  className="login__form form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => handleSubmit(e)}>
        {active?<h1 className=' label  leading-tight text-5xl mt-0 mb-2 text-gray-600 underline'>Register here 🚪</h1>:<h1 className=' label  leading-tight text-5xl mt-0 mb-2 text-gray-600 underline'>Login here 🚪</h1>}
        <input
        
        className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        
        className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        
        className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {active?<input
        
        className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          type="password"
          value={cpassword}
          placeholder="Confirm Password"
          onChange={(e) => setCpassword(e.target.value)}
        />:null}
        {active? <input
       
        className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          type="phone"
          value={phone}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />:null}
       {active?
      <span class="inline-grid grid-cols-3 gap-4" onClick={()=>setActive(false)}>Login?</span> :
        <span class="inline-grid grid-cols-3 gap-4" onClick={()=>setActive(true)}>Don't have an account?</span>} <button onClick={handleclick}  type="submit" className="submit__btn btn1 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
