import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='  top-0 z-1000'>
      <nav className='flex flex-row justify-between  bg-slate-100 tab:text-xl phone:text-[10px] w-full rounded-full'>
        <ul className='flex flex-row tab:gap-10 tab:p-5 phone:gap-2 phone:p-1'>
<Link to="/" ><li>Home</li></Link>
<Link to="/about" ><li>About us</li></Link>
<Link to="/contact" ><li>Contact US</li></Link>
<Link to="/filter" ><li>Filter</li></Link>

</ul>
<input type="search" name="search" id="search" placeholder='Search Here' className='bg-slate-100 px-2 rounded-full' />
      </nav>
    </div>
  )
}

export default Navbar
