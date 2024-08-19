import React from 'react'
import image from "./images/mail.png"


const Contact = () => {
  return (
    <div className='w-full flex flex-col gap-[57px] items-center pt-10 '>

      <div className="intouch m-auto  backdrop-blur-30 flex flex-row tab:gap-10 phone:gap-2  w-fit tab:p-10 phone:p-4 rounded-3xl">
        <div className="imgpart my-auto"> <img src={image} className=' w-60 h-60 phone:hidden tab:block rounded-3xl' alt="" /></div>
        <div className="rightpart flex gap-9 flex-col">
          <h1 className='text-black  font-extrabold tab:text-3xl phone:text-lg'>Get in touch</h1>
          <input type="text" placeholder='Enter your name' className='w-80 bg-slate-50 p-4 rounded-full focus:shadow-custom-drop-shadow' />
          <input type="email" name="email" id="email" placeholder='Enter your Email' className='w-80 bg-slate-50 p-4 rounded-full focus:shadow-custom-drop-shadow' />
          <input type="text" name="msg" id="msg" placeholder='Tell you problem' className='w-80 bg-slate-50 p-4 h-40 rounded-3xl focus:shadow-custom-drop-shadow ' />
        </div>
      </div>
      <button className='text-2xl w-28 p-2 m-auto self-center justify-center bg-slate-50 rounded-3xl font-bold'>Submit</button>
      <div className=' backdrop-blur-30 left-0 text-white w-full fixed bottom-0 m-auto flex justify-center '>
      Cpoyright &copy; | All Rights Reserved | Spardha 2024
    </div>
    </div>
  )
}

export default Contact
