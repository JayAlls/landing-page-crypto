import React from 'react'
import "./style.config.scss"

const Card = () => {
  return (
    <aside className="profile-card">
        <div className='profile-container'>
            <img src="./profile-picture.png" alt="User Profile" />
            <div className='profile'>
              <h2>0xJayS</h2>
              <p>@jaystw3c</p>
            </div>
        </div>
        <div className='img-container'>
            <img src='./cube.jpg' alt='NFT cube'/>
        </div>
        <div className="timer">
            <span>24H</span> : <span>44M</span> : <span>06S</span>
            <p>Time Left</p>
        </div>
    </aside>
  )
}

export default Card