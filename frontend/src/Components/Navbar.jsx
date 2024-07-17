import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const[sticky, setSticky]=useState(false)
  useEffect(()=>{
      const HandleChange=()=>{
        if(window.scrollY>0){
          setSticky(true)
        }
        else{
          setSticky(false)
        }
      }
      window.addEventListener('scroll',HandleChange)
      return()=>{
        window.removeEventListener('scroll',HandleChange);
      }
  },[])
  return (
    <div className={` max-w-screen-2xl container mx-auto md:px-20 px-4 fixed w-full top-0 left-0 ${sticky?"sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out":""}` }>
      <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
     <li><a>Course</a></li>
     <li><a>Contact</a></li>
     <li><a>About</a></li>
    
      </ul>
    </div>
    <a className="cursor-pointer text-2xl font-bold">BookDekho</a>
  </div>
  <div className='navbar-end space-x-3' >
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
     <li><a>Course</a></li>
     <li><a>Contact</a></li>
     <li><a>About</a></li>
    </ul>
  </div>
 <div className="hidden md:block">
 <label className=" ps-3 py-2 border rounded-md flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>

 </div>
 <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
  <div >
    <a className="bg-black text-white px-3 py-2 cursor-pointer rounded-md hover:bg-slate-800 duration-300">Login</a>
  </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
