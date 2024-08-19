import React from 'react'
import Navbar from './Navbar'
import data1 from "./mainheading.json";
import events from "./data.json";
import Footer from './Footer'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
const Home = () => {

  const data = data1.mainHeadings
  const event = events.SportsEvents;
  let mainhead = [];
  data.forEach(i => {
    const path = `/${i.replaceAll(" ", "_").toLowerCase()}`;
    const element = `<${i.replace(" ", "_")} />`;
    mainhead.push({
      path: path,
      element: element
    });
  });
console.log(mainhead.length)

  return (
    <div >
      <Navbar />
      <div className="cards felx gap-10 overflow-x-hidden  justify-center m-auto w-full ">
        <div className="flex w-full tab:gap-5 phone:gap-1 my-5 flex-wrap">
        {
          data.map((item) => {
            return (
              <div key={item} className='w-[60%] z-10 tab:h-28 phone:h-16 phone:p-1  tab:p-3 m-auto flex justify-center backdrop-blur-30  text-white rounded-xl'>

                <a href={`#${item.replaceAll(" ", "_")}`} ><button > <h1 className=' phone:text-sm font-bold tab:text-3xl'>{item}</h1></button></a>

              </div>
            )
          }
          )}
          </div>
        <div className="flex gap-5 flex-col">
          <div className="flex w-full   gap-2 flex-wrap">
            {
              event.map((item) => {
                if (data[0] == item.mainHeading) {
                  return (
                    <div key={item.title} id={`${data[0].replaceAll(" ", '_')}`} className='tab:w-80 phone:w-60 z-10  phone:h-60 tab:h-80 flex-col tab:gap-5 phone:gap-1 phone:p-1  tab:p-3 m-auto flex justify-center items-center backdrop-blur-30  text-white rounded-xl flex-wrap'>
                      <h1 className='tab:text-3xl phone:text-sm font-bold'>{item.title}</h1>
                      <p>{item.desc}</p>
                      <div className='flex flex-row'>
                      <p>{item.time}</p> &nbsp;  &nbsp;
                      <p>{item.date}</p></div>
                      <p>{item.location}</p>
                      <h1 className='tab:text-3xl phone:text-sm font-extrabold text-white'>{data[0]}</h1>
                    </div>
                  )
                }
              })
            }</div>
          <div className="flex w-full   gap-2 flex-wrap">
            {
              event.map((item) => {
                if (data[1] == item.mainHeading) {
                  return (
                    <div key={item.title} id={`${data[1].replaceAll(" ", '_')}`} className='tab:w-80 phone:w-60 z-10  phone:h-60 tab:h-80 flex-col tab:gap-5 phone:gap-1 phone:p-1  tab:p-3 m-auto flex justify-center items-center backdrop-blur-30  text-white rounded-xl flex-wrap'>
                      <h1 className='tab:text-3xl phone:text-sm font-bold'>{item.title}</h1>
                      <p>{item.desc}</p>
                      <div className='flex flex-row'>
                      <p>{item.time}</p> &nbsp;  &nbsp;
                      <p>{item.date}</p></div>
                      <p>{item.location}</p>
                      <h1 className='tab:text-3xl phone:text-sm font-extrabold text-white'>{data[1]}</h1>
                    </div>
                  )
                }
              })
            }</div>
          <div className="flex w-full   gap-2 flex-wrap">
            {
              event.map((item) => {
                if (data[2] == item.mainHeading) {
                  return (
                    <div key={item.title} id={`${data[2].replaceAll(" ", '_')}`} className='tab:w-80 phone:w-60 z-10  phone:h-60 tab:h-80 flex-col tab:gap-5 phone:gap-1 phone:p-1  tab:p-3 m-auto flex justify-center items-center backdrop-blur-30  text-white rounded-xl flex-wrap'>
                    <h1 className='tab:text-3xl phone:text-sm font-bold'>{item.title}</h1>
                    <p>{item.desc}</p>
                    <div className='flex flex-row'>
                    <p>{item.time}</p> &nbsp;  &nbsp;
                    <p>{item.date}</p></div>
                    <p>{item.location}</p>
                    <h1 className='tab:text-3xl phone:text-sm font-extrabold text-white'>{data[2]}</h1>
                  </div>
                  )
                }
              })
            }</div>
          <div className="flex w-full   gap-2 flex-wrap">
            {
              event.map((item) => {
                if (data[3] == item.mainHeading) {
                  return (
                    <div key={item.title} id={`${data[3].replaceAll(" ", '_')}`} className='tab:w-80 phone:w-60 z-10  phone:h-60 tab:h-80 flex-col tab:gap-5 phone:gap-1 phone:p-1  tab:p-3 m-auto flex justify-center items-center backdrop-blur-30  text-white rounded-xl flex-wrap'>
                      <h1 className='tab:text-3xl phone:text-sm font-bold'>{item.title}</h1>
                      <p>{item.desc}</p>
                      <div className='flex flex-row'>
                      <p>{item.time}</p> &nbsp;  &nbsp;
                      <p>{item.date}</p></div>
                      <p>{item.location}</p>
                      <h1 className='tab:text-3xl phone:text-sm font-extrabold text-white'>{data[3]}</h1>
                    </div>
                  )
                }
              })
            }</div>
          <div className="flex w-full h-[80%] overflow-y-auto  gap-2 flex-wrap">
            {
              event.map((item) => {
                if (data[4] == item.mainHeading) {
                  return (
                    <div key={item.title} id={`${data[4].replaceAll(" ", '_')}`} className='tab:w-80 phone:w-60 z-10  phone:h-60 tab:h-80 flex-col tab:gap-5 phone:gap-1 phone:p-1  tab:p-3 m-auto flex justify-center items-center backdrop-blur-30  text-white rounded-xl flex-wrap'>
                    <h1 className='tab:text-3xl phone:text-sm font-bold'>{item.title}</h1>
                    <p>{item.desc}</p>
                    <div className='flex flex-row'>
                    <p>{item.time}</p> &nbsp;  &nbsp;
                    <p>{item.date}</p></div>
                    <p>{item.location}</p>
                    <h1 className='tab:text-3xl phone:text-sm font-extrabold text-white'>{data[4]}</h1>
                  </div>
                  )
                }
              })
            }</div>
        </div>
    
      </div>
      <div className=' backdrop-blur-30 left-0 text-white w-full m-auto flex justify-center bottom-0'>
      Cpoyright &copy; | All Rights Reserved | Spardha 2024
    </div>
    </div>
  )

}

export default Home
