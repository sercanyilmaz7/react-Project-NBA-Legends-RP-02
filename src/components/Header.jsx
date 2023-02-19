import React from 'react'
import nba from "./assets/nba-logo.png"

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
          <img src={nba} alt="" />
        </div>
        <h1 className='title'>NBA Legends</h1>
    </div>
  )
}

export default Header