import React from 'react'
import AirPodIntro from './AirPodIntro'
import Ipad from './Ipad'
import HomeProducts from './products/HomeProducts'

export default function Hero() {
  return (
    <div className='hero'>
      <AirPodIntro/>
      <Ipad/>
      <HomeProducts/>
    </div>
  )
}
