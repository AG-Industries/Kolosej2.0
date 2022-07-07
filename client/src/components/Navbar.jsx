import React from 'react'
import 'flowbite'
import moment from 'moment'

const Navbar = ({handleDateChange, selectedDate}) => {

  const stringDate = new Date(`${selectedDate}`).toLocaleDateString('sl-SI',  {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })


  return (
    <>
    <div className='flex items-center justify-between px-10 py-4 my-4 z-[100] w-full'>
        <div className='flex items-center'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>KOLOSEJ 2.0</h1>
            <div>
                <button className='text-white px-4'>Spored</button>
                <button className='text-white pr-4'>Nakup</button>
            </div>
        </div>
        <div>
            <input className='rounded-xl' onChange={handleDateChange} value={selectedDate} type='date' />
        </div>
    </div>
    <div className='flex items-center justify-start px-10 py-4 my-4 z-[100] w-full'>
        <div className='flex items-center p-3  '>
          <h1 className='text-white text-4xl font-bold'>Spored za: <span className='underline underline-offset-2'>{stringDate}</span>  </h1>
        </div>
    </div>
    </>
  )
}

export default Navbar