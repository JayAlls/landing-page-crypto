import React from 'react'
import "./style.config.scss"
import Card from '../Card/Card'

const MainBanner = () => {
  return (
    <section className="hero">
      <div>
        <h1>START YOUR <br /><span className="gradient">CRYPTO</span><br /><span className="gradient">PORTFOLIO</span></h1>
        <div className='line'></div>
        <button>Sign Up Now</button>
      </div>

      <div>
        <Card />
      </div>
    </section>
  )
}

export default MainBanner