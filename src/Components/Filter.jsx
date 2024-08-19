import React from 'react';
import data1 from "./data.json";
import { useState } from 'react';

const Filter = () => {
    const data = data1.SportsEvents;
    const [filterDate, setFilterDate] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const filteredByDateAndLocation = data.filter((event) => {
        const matchesDate = filterDate === '' || event.date === filterDate;
        const matchesLocation = filterLocation === '' || event.location === filterLocation;
        return matchesDate && matchesLocation;
    });
    return (
        <div>
            <div className="input flex flex-row backdrop-blur-30 my-5 w-fit justify-center p-4 rounded-3xl tab:gap-10 phone:gap-2 mx-auto">
<div className="selectdate flex phone:flex-col tab:flex-row">
                <label htmlFor="filterDate" className='tab:text-3xl phone:text-md text-white font-bold'>Filter by Date</label>
            <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className='bg-transparent tab:text-xl phone:sm'
            /></div>
            <div className="selectlocation flex tab:flex-row phone:flex-col">
            <label htmlFor="filterLocation" className='tab:text-3xl phone:text-md text-white font-bold'>Filter by Location</label>
            <select className='bg-transparent tab:text-xl phone:sm'
                name="filterLocation"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                id="filterLocation"
            >
                <option value="">All Locations</option>
                <option value="Stadium A">Stadium A</option>
                <option value="Stadium B">Stadium B</option>
                <option value="Field A">Field A</option>
                <option value="Field B">Field B</option>
                <option value="Field C">Field C</option>
                <option value="Field D">Field D</option>
                <option value="Ground 1">Ground 1</option>
                <option value="Ground 2">Ground 2</option>
                <option value="Ground 3">Ground 3</option>
                <option value="Ground 4">Ground 4</option>
                <option value="Ground 5">Ground 5</option>
                <option value="Hall 1">Hall 1</option>
                <option value="Hall 2">Hall 2</option>
                <option value="Hall 3">Hall 3</option>
                <option value="Hall 4">Hall 4</option>
                <option value="Field 1">Field 1</option>
                <option value="Field 2">Field 2</option>
                <option value="Climbing Area">Climbing Area</option>
                <option value="Trail">Trail</option>
                <option value="Rappelling Site">Rappelling Site</option>
            </select></div>
            </div>
            <div className="flex w-full   gap-2 flex-wrap m-auto">
                {filteredByDateAndLocation.length > 0 ? (
                    filteredByDateAndLocation.map((event) => (
                        <div key={event.id} className="tab:w-80 phone:w-60 z-10  phone:h-60 tab:h-80 flex-col tab:gap-5 phone:gap-1 phone:p-1  tab:p-3 m-auto flex justify-center items-center backdrop-blur-30  text-white rounded-xl flex-wrap">
                            <h1 className='tab:text-3xl phone:text-sm font-bold'>{event.title}</h1>
                            <p>{event.desc}</p>
                            <div className='flex flex-row'>
                                <p>{event.time}</p> &nbsp;  &nbsp;
                                <p>{event.date}</p></div>
                            <p>{event.location}</p>
                            <h1 className='tab:text-3xl phone:text-sm font-extrabold text-white'>{event.mainHeading}</h1>
                        </div>
                    ))
                ) : (
                    <h1 className='text-[44px] backdrop-blur-30 rounded-3xl font-extrabold p-5 flex-col flex justify-center text-white'> <p>Sorry</p> <p>No event is Sheduled</p></h1>
                )}
            </div>
            
        </div>
    );
};

export default Filter;
