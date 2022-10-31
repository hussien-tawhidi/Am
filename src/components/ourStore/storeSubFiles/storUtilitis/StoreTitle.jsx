import React from 'react'

export default function StoreTitle({light,dark}) {
  return (
    <div className='mainStoreTitle'>
        <h4 className="title">
        {dark} <span>{light}</span>
      </h4>
    </div>
  )
}
