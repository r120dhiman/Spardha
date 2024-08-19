import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Filter from './Components/Filter'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  

const router=createBrowserRouter([
  {
  path:"/about",
  element:<> <Navbar></Navbar> <About/></>
},
  {
  path:"/",
  element:<> <Home/></>
},
  {
  path:"/contact",
  element:<><Navbar></Navbar> <Contact/></>
},
{
  path:"/filter",
  element:<> <Navbar></Navbar> <Filter></Filter></>
}

])
  return (
    <>

     <RouterProvider router={router}></RouterProvider>
     
     
    </>
  )
}

export default App
