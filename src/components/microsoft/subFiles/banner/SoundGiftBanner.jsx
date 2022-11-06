import React from 'react'
import { soundBanner } from '../../../../data/Microsoft'
import SoundGiftBannerCard from './SoundGiftBannerCard'

export default function SoundGiftBanner() {
  return (
    <div className='soundGiftbanner'>
      <SoundGiftBannerCard soundBanner={soundBanner}/>
    </div>
  )
}
