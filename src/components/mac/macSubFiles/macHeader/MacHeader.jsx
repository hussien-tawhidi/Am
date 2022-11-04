import React from 'react'
import { macHeader } from '../../../../data/MacData'
import SubHeaderDescktop from './SubHeaderDescktop'
import SubHeaderMobile from './SubHeaderMobile'

export default function MacHeader() {
  return (
    <div className='mac-header'>
    <SubHeaderMobile subHeaderMobile={macHeader}/>
    <SubHeaderDescktop subHeaderDescktop={macHeader}/>
    </div>
  )
}
