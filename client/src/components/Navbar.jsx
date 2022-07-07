import React from 'react'
import 'flowbite'
import moment from 'moment'

const Navbar = ({handleDateChange, selectedDate}) => {


  return (
    <div className='flex items-center justify-between p-4 my-4 z-[100] w-full'>
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
  )
}

export default Navbar