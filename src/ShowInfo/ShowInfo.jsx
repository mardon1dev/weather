import React, { useContext } from 'react'
import WeatherContext from '../Context/Context'
import HourlyForecast from '../Swiper/Swiper';
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { TbUvIndex } from "react-icons/tb";

import "./ShowInfo.css"

const ShowInfo = () => {

    const info = useContext(WeatherContext);
    const {search, setSearch, handleSearch} = useContext(WeatherContext);
    const city = info.data;

    const astro = city.forecast.forecastday[0];
    const hourlyForecast = astro.hour;
    const forecast = city.forecast.forecastday.slice(1, city.forecast.forecastday.length);

  return (
    <div className='showinfo'>
    <div className="container mx-auto">
    <div className='search pb-[30px]'>
      <div className='flex w-full justify-between pt-[30px] pb-[33px]'>
        {/* <div className='change flex relative'>
          <input type="checkbox" name="check" id="check" />
          <label htmlFor="check"></label>
          <span className='mode'></span>
        </div> */}
        <input className='search__input' value={search} onChange={e=>setSearch(e.target.value)} id='text' name='text' type="text" placeholder='Search for your city...' />
        <button className='search__button ml-5' onClick={handleSearch}>Show data</button>
      </div>
      <div className='show flex flex-wrap text-white gap-3 gap-y-10 md:justify-between  w-full items-center justify-center '>
        <div className='city flex justify-center flex-col items-center text-center w-[100%] lg:justify-between md:w-[30%]' >
          <p className="text-[24px] lg:text-[48px]  font-bold">{city.location.name}</p>
          <span className="font-bold text-[48px] lg:text-[96px]">{city.location.localtime.split(" ").slice(1,2)}</span>
          <span className="text-[24px] ">{city.location.localtime.split(" ").slice(0,1)}</span>
        </div>
        <div className='today flex flex-col justify-between w-[100%] md:w-[65%] sm:flex-row gap-y-5' >
          <div className='today-tem flex flex-col items-center justify-between'>
            <strong className="text-[40px] lg:text-[80px]">{city.current.temp_c}'C</strong>
            <div className='flex w-[100%] flex-row sm:flex-col justify-evenly items-center gap-2 mt-4'>
              <div className="flex items-center gap-3 text-center">
              <FiSunrise size={48} color="white" />
              <div className="flex flex-col">
                <span className="font-semibold text-[20px]">Sunrise</span>
                <div>
                    <span className="font-semibold text-[20px]">{astro.astro.sunrise}</span>
                </div>
              </div>
              </div>
              <div className="flex items-center gap-3 text-center">
              <FiSunset size={48} color="white" />
              <div className="flex flex-col">
                <span className="font-semibold text-[20px]">Sunset</span>
                <span className="font-semibold text-[20px]">{astro.astro.sunset}</span>
              </div>
              </div>
            </div>
          </div>
          <div className="today-situation flex flex-row items-center justify-center sm:flex-col">
            <img className='w-[100%] sm:w-[50%] today-img' src={`https:${city.current.condition.icon}`} alt="Condition" />
            <p className="font-semibold text-[32px] text-center">{city.current.condition.text}</p>
          </div>
          <div className="today-info flex flex-wrap gap-y-8 flex-row sm:flex-column">
            <div className="w-[50%] humidity flex flex-col items-center justify-between gap-3 ">
              <WiHumidity size={40} color="white" />
              <span>{city.current.humidity} %</span>
              <span>Humidity</span>
            </div>
            <div className="w-[50%] wind-speed flex flex-col items-center justify-between gap-3">
              <FaWind size={30} color="white" />
              <span>{city.current.wind_kph} kph</span>
              <span>WInd speed</span>
            </div>
            <div className="w-[50%] pascal flex flex-col items-center justify-between gap-3">
              <MdSpeed size={30} color="white" />
              <span>{city.current.pressure_mb} mbar</span>
              <span>Pressure</span>
            </div>
            <div className="w-[50%] uv flex flex-col items-center justify-between gap-3">
              <TbUvIndex size={30}  color="white"/>
              <span>{city.current.uv} uv</span>
              <span>UV Index</span>
            </div>
          </div>
        </div>
        <div className="forecast w-[100%] md:w-[40%]">
          <h2 className="font-bold text-[24px] text-center sm:text-[32px]">Forecast</h2>
          <table className="min-w-full text-left border-collapse">
      <thead className='text-center'>
        <tr className="border-b-2 border-gray-200">
          <th className="px-2 py-2 font-bold text-[16px] sm:text-[24px]">Mood</th>
          <th className="px-2 py-2 font-bold text-[16px] sm:text-[24px]">Temp</th>
          <th className="px-2 py-2 font-bold text-[16px] sm:text-[24px]">Weather</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {
          forecast && forecast.map((item, index) => {
            return (
              <tr key={index} className="border-b-2 border-gray-200">
                <td className="px-2 flex items-center justify-center">
                  <img src={`https:${item.day.condition.icon}`} alt="" w={100}/>
                </td>
                <td className="px-2 ">{item.day.avgtemp_c}°C</td>
                <td className="px-2 ">{item.date}</td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
        </div>
        <div className="hourly-forecast w-[100%] md:w-[55%] min-h-[300px]" >
          <h2 className="font-bold text-[24px] text-center sm:text-[32px]">Hourly Forecast</h2>
          <div className="flex justify-center gap-3 mt-4">
            <HourlyForecast  />
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ShowInfo