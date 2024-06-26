import { useContext } from 'react'
import WeatherContext from '../Context/Context'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Swiper.css"
import React from 'react'


const hourlyForecast = () => {

    const info = useContext(WeatherContext);
    const city = info.data;

    const astro = city.forecast.forecastday[0];
    const hourlyForecast = astro.hour;

  return (
    <>
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      className='w-full sm:hidden block cursor-pointer'
    >
        {
            hourlyForecast && hourlyForecast.map((item, index) => {
              if (new Date(item.time) > new Date(city.location.localtime)) {
                return (
                    <SwiperSlide key={index}>
                        <div key={index} className="flex flex-col items-center justify-between gap-3 bg-[#373636] min-w-[80px] py-4 rounded-[30px] min-h-[200px] h-full">
                            <span className='text font-bold'>{item.time.split(" ").slice(1,2)}</span>
                            <img className='hourly-img' src={`https:${item.condition.icon}`} alt="Condition"  width={100} height={100}/>
                            <span>{item.temp_c}°C</span>
                            <span className='text-center'>{item.condition.text}</span>
                        </div>
                    </SwiperSlide>
                )
              }
            })

        }
    </Swiper>
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      className='w-full sm:block hidden cursor-pointer'
    >
        {
            hourlyForecast && hourlyForecast.map((item, index) => {
              if (new Date(item.time) > new Date(city.location.localtime)) {
                return (
                    <SwiperSlide key={index}>
                        <div key={index} className="flex flex-col items-center justify-between gap-3 bg-[#373636] min-w-[80px] py-4 rounded-[30px] min-h-[200px] h-full">
                            <span className='text font-bold'>{item.time.split(" ").slice(1,2)}</span>
                            <img className='hourly-img' src={`https:${item.condition.icon}`} alt="Condition"  width={100} height={100}/>
                            <span>{item.temp_c}°C</span>
                            <span className='text-center'>{item.condition.text}</span>
                        </div>
                    </SwiperSlide>
                )
              }
              
            })
        }
    </Swiper>
    </>
  )
}

export default hourlyForecast