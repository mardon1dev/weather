    import React, { createContext, useEffect, useState } from 'react';
    import Logo from "../assets/weather.svg"

    const WeatherContext = createContext();

    export const WeatherProvider = ({children})=>{

        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(false)
        const [search, setSearch] = useState("Tashkent");

        const handleSearch = async() =>{
            if (search) {
                setSearch(search)
                try {
                    setLoading(true)
                    const promise2 = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=56f1c4b0938a440a95332811241806&q=${search ? search : "Tashkent"}&days=6`);
                    const data2 = await promise2.json()
                    setTimeout(() => {
                        setData(data2)
                        setLoading(false)
                    }, 1000);
                    setSearch("")
                } catch (error) {
                    console.log(error);
                }
            }
            else {
                alert("Please enter city name")
            }
        }
        useEffect(()=>{
            handleSearch()
        }, [])
        if (!data || loading) {
            return <div className='container mx-auto'>
                <div className='w-full h-[100vh] flex items-center justify-center'>
                    <div className='logo-wrapper'>
                        <img src={Logo} alt="logo" className='logo' width={100}/>
                    </div>
                </div>
            </div>
        }

        return (
            <WeatherContext.Provider value={{data, search, setSearch, handleSearch}}>
                {children}
            </WeatherContext.Provider>
        )
    }

export default WeatherContext;

        
