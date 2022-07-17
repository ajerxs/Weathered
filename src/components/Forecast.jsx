import React from 'react'

function Forecast( {title} ) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2'></hr>
        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="http://store-images.s-microsoft.com/image/apps.34925.13664108468657913.8218191b-9e2a-49f4-8455-3c027b985a5d.25b2a0f7-d195-45f9-87cd-9252297e7028" alt="cloudy" className='w-12 my-1' />
                <p className='font-medium '> 22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="http://store-images.s-microsoft.com/image/apps.34925.13664108468657913.8218191b-9e2a-49f4-8455-3c027b985a5d.25b2a0f7-d195-45f9-87cd-9252297e7028" alt="cloudy" className='w-12 my-1' />
                <p className='font-medium '> 22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="http://store-images.s-microsoft.com/image/apps.34925.13664108468657913.8218191b-9e2a-49f4-8455-3c027b985a5d.25b2a0f7-d195-45f9-87cd-9252297e7028" alt="cloudy" className='w-12 my-1' />
                <p className='font-medium '> 22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="http://store-images.s-microsoft.com/image/apps.34925.13664108468657913.8218191b-9e2a-49f4-8455-3c027b985a5d.25b2a0f7-d195-45f9-87cd-9252297e7028" alt="cloudy" className='w-12 my-1' />
                <p className='font-medium '> 22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="http://store-images.s-microsoft.com/image/apps.34925.13664108468657913.8218191b-9e2a-49f4-8455-3c027b985a5d.25b2a0f7-d195-45f9-87cd-9252297e7028" alt="cloudy" className='w-12 my-1' />
                <p className='font-medium '> 22°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast