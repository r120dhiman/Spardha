import React from 'react';
import image1 from "./images/about1.jpeg"
import image2 from "./images/about2.jpg"
// import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className='flex flex-col w-fit gap-8 pt-8'>
        <div className="card flex phone:flex-col tab:flex-row w-[70%] backdrop-blur-30 phone:gap-4 tab:gap-20 rounded-3xl ">
            <img src={image1} alt="" className='tab:w-72 phone:w-[100%] tab:h-72 phone:h-40 rounded-t-3xl' />
            <p className='p-2 rounded-3xl'>Spardha is the renowned annual sports festival hosted by the Indian Institute of Technology (IIT) BHU, recognized as one of India's largest inter-collegiate sports events. This vibrant festival attracts participants from various IITs, NITs, and other prestigious institutions across the country, featuring a diverse range of sports such as football, basketball, cricket, and track and field. Known for its excellent organization and top-notch facilities, Spardha provides a competitive and engaging platform for students to showcase their athletic talents.</p>
            </div>
        <div className="card flex phone:flex-col tab:flex-row w-[70%] backdrop-blur-30 phone:gap-4 tab:gap-20 rounded-3xl">
           
            <p className='p-2'>In addition to the sporting events, Spardha includes cultural activities like opening and closing ceremonies, performances, and entertainment, creating a festive atmosphere throughout the festival. It promotes physical fitness, fosters sportsmanship, and builds a sense of community among participants. Spardha exemplifies IIT BHU’s commitment to nurturing talent and offering a well-rounded, dynamic student experience.</p>
            <img src={image2} alt="" className='tab:w-72 phone:w-[100%] tab:h-72 phone:h-40 rounded-b-3xl' />
            </div>
            <div className=' backdrop-blur-30 left-0 text-white w-full m-auto flex justify-center fixed bottom-0'>
      Cpoyright &copy; | All Rights Reserved | Spardha 2024
    </div>
    </div>
  )
}

export default About
