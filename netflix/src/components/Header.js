import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
const Header = () => {

  return (
    <div className='absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black'>
      <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix-logo" />
      <div className='flex items-center'>
        < IoIosArrowDropdownCircle size="24px" color='white' />
        <h1 className='text lg font-bold text-white'>Sonu Project</h1>
        <div className='ml-4'>

        </div>
        <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
        <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>


      </div>
    </div>


  )
}

export default Header