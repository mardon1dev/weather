    import React, { createContext, useEffect, useState } from 'react';
    import Logo from "../assets/weather.svg"

    const WeatherContext = createContext();

    export const WeatherProvider = ({children})=>{

        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(false)
        const [search, setSearch] = useState("Tashkent");
        const [error, setError] = useState(false);

        const handleSearch = async() =>{
            setSearch(search)
            setLoading(true)
            try {
                const promise = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=56f1c4b0938a440a95332811241806&q=${search ? search : "Tashkent"}&days=6`);
                const data = await promise.json()
                setTimeout(() => {
                    setData(data)
                    setLoading(false)
                    setSearch("")
                }, 1000);
            } catch (error) {
                console.log(error);
                setLoading(false)
                setError(true, "You entered wrong city name")
            }
        }
        useEffect(()=>{
            handleSearch()
        }, [])

        return (
            <WeatherContext.Provider value={{data, search, setSearch, handleSearch, loading, setLoading, error}}>
                {children}
            </WeatherContext.Provider>
        )
    }

export default WeatherContext;

        
