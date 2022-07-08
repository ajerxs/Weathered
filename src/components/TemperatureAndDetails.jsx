import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src="http://store-images.s-microsoft.com/image/apps.34925.13664108468657913.8218191b-9e2a-49f4-8455-3c027b985a5d.25b2a0f7-d195-45f9-87cd-9252297e7028" alt="cloudy" className='w-20' />
            <p className='text-5xl'>34°</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1' />
                    Real Feel: 
                    <span className='font-medium ml-1'>32°</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1' />
                    Humidity: 
                    <span className='font-medium ml-1'>65%</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1' />
                    Wind: 
                    <span className='font-medium ml-1'>11 km/h</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun />
            <p className='font-light'>
                Rise: <span className='font-medium ml-1'>06:45 AM</span>
            </p>
            <p className='font-light'>|</p>
            <UilSunset />
            <p className='font-light'>
                Set: <span className='font-medium ml-1'>07:35 PM</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowUp />
            <p className='font-light'>
                High: <span className='font-medium ml-1'>45°</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowDown />
            <p className='font-light'>
                Low: <span className='font-medium ml-1'>40°</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails