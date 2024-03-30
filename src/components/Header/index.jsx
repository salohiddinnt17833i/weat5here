import React, { useEffect, useRef, useState } from 'react'
import style from './index.module.css'
import Weather from '../Weather'

function Header() {
  const [data, setData] = useState()
  const cityNameRef = useRef([])
  function handleSearch(e) {
    e.preventDefault()
    fetch(`https://weather-api-by-any-city.p.rapidapi.com/weather/${cityNameRef.current.value}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aae9512575msh29d7ede65225d13p132aaajsne1df1bfdbab9',
        'X-RapidAPI-Host': 'weather-api-by-any-city.p.rapidapi.com'
      }
    })
      .then(res => res.json())
      .then(data => {
        setData(data.current)
      })
      .catch(er => {
        console.log(er);
      })
  }

  useEffect(() => {
    fetch(`https://weather-api-by-any-city.p.rapidapi.com/weather/Tashkent`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aae9512575msh29d7ede65225d13p132aaajsne1df1bfdbab9',
        'X-RapidAPI-Host': 'weather-api-by-any-city.p.rapidapi.com'
      }
    })
      .then(res => res.json())
      .then(data => {
        setData(data.current)
      })
      .catch(er => {
        console.log(er);
      })

  }, [])
  return (
    <>
      <div style={{ padding: "30px" }}>
        <div className={style.wrapper}>
          <form onSubmit={handleSearch} className='d-flex gap-2'>
            <input ref={cityNameRef} className={style.input} type="text" placeholder='Enter a city name' />
            <button className='w-25 btn btn-light'>Serach</button>
          </form>
          <div>
            <Weather data={data}></Weather>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header