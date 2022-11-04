import React from 'react'
import { iphoneFinalCard, iphoneLastCards } from '../../../../data/MobileData'
import GetMoreOnIphoneCard from './GetMoreOnIphoneCard'

export default function GetMoreOnIPhone() {
  return (
    <div className='container'>
         <h1 className="iphoneLGTitle">Get more out of your iPhone.</h1>
        <GetMoreOnIphoneCard cardData={iphoneLastCards}/>
        <GetMoreOnIphoneCard cardData={iphoneFinalCard}/>
    </div>
  )
}
