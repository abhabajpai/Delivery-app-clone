import React from 'react'
import { Link } from 'react-router-dom'
import LocationPicker from '../LocationPicker'
import SearchBox from '../SearchBox'
import { FaRegUser } from 'react-icons/fa'
import { CartButton } from '../cart'

const Header = () => {
  return (
    <header className="_nav px-2 sm:px-0">
    <div className="_header sm:flex h-full">
        <div className="hidden sm:flex max-w-[150px] md:max-w-[178px] w-full cursor-pointer sm:hover:bg-gray-50 items-center justify-center border-r _border-light">
            <Link to={'/'}>
            <div>
                <span className='font-bold text-[32px] md:text-[30px] text-purple-600 tracking-tight lowercase'>zepto</span>
                <div className='bg-gray-400 text-white text-[10px] px-2 py-0.5 rounded-full -mt-1'>
                    Super Saver</div></div></Link>
                  
        </div> 
          <div className='w-full sm:w-[240px] xl:w-[320px] py-4 px-1 sm:p-0 _header_loc flex items-center sm:justify-center cursor-pointer sm:hover:bg-gray-50' >
                        <LocationPicker/>
                    </div>
                    <div className='flex-1 relative _header_search'>
                        <SearchBox/>
                    </div>
                    <div className='flex items-center justify-center cursor-pointer sm:hover:bg-gray-50 max-w-[80px] lg:max-w-[160px] w-full' >
                        <span className='font-medium _text-default hidden sm:block'>Login</span>
                        <span className='sm:hidden _text-default'><FaRegUser size={22}/></span>
                    </div>
                    <div className='py-2 hidden md:flex h-full items-center mr-8 ml-3'>
                        <CartButton/>
                    </div>
    </div>
    </header>
  )
}

export default Header