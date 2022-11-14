import React from 'react'
import { huaweiCardPhone } from '../../../../data/Huawei'
import HuaweiPhoneCard from './HuaweiPhoneCard'

export default function HuaweiPhones() {
  return (
    <div className='container'>
      <h1 className="huawieTitle">Some of hot mobile products</h1>
        <HuaweiPhoneCard huaweiCardData={huaweiCardPhone}/>
    </div>
  )
}
