import React from 'react'
import { headerData } from '../../data/FakeData'

export default function HeaderMenu({showSearchContainer}) {
  return (
    <div className='header'>
         <div className="logo">
        <img src="/assets/logo.png" alt="logo" className="headerImg" />
      </div>
      <div className="menu">
        {headerData.map((header) => (
          <>
            <a href="/" key={header.title}>
              {header.title}
            </a>
          </>
        ))}
      </div>
      <div className="header-icons">
        <img
          src="/assets/icons/searchIcon.png"
          alt=""
          className="headerImg searchIcon"
          onClick={showSearchContainer}
        />
        <img
          src="/assets/icons/shoppingcard.png"
          alt=""
          className="headerImg"
        />
      </div>
    </div>
  )
}
