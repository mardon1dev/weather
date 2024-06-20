import React, { useContext } from 'react'
import WeatherContext from '../Context/Context'

const Search = () => {
    const {search, setSearch, handleSearch} = useContext(WeatherContext);
  return (
    <div className='container'>
        <div className='flex w-full justify-between pt-[30px]'>
            <input className='search__input' value={search} onChange={e=>setSearch(e.target.value)} id='text' name='text' type="text" placeholder='Search for your city...' />
            <button className='search__button ml-5' onClick={handleSearch}>Show data</button>
        </div>
    </div>
  )
}

export default Search;