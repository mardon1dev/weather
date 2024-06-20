import React from 'react'
import Search from '../Search/Search'

const Header = () => {
  return (
    <>
        <header>
        <Search />
            <div className='container'>
                <div className='text-center md:text-left pb-[33px]'>
                    <h1 className='text-white font-bold text-[66px]'>Welcome.</h1>
                    <p className='text-white font-semibold text-[22px]'>Here you can see daily weather of your city and up to 5 days forecast and also hourly foreacast.</p>
                </div>
            </div>
        </header>
    </>

  )
}

export default Header