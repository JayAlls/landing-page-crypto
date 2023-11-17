'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import "./style.config.scss"
import Card from '../Card/Card'

const MainBanner = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [<Card picture={"./cube.jpg"}/>, <Card picture={"./triangle.jpg"} />, <Card picture={"./circle.jpg"} />];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % cards.length; // Change l'index de la carte
      });
    }, 4000); // Change la carte toutes les 4 secondes

    return () => clearInterval(intervalId); // Nettoie l'intervalle lors du démontage
  }, []);

  // Fonction pour obtenir la classe en fonction de l'index
  const getCardClassName = (index) => {
    let newIndex = (currentIndex + index) % cards.length;
    if (newIndex === 0) return 'active';
    if (newIndex === 1) return 'second';
    return 'third';
  }

  return (
    <section className="hero">
      <div>
        <h1>START YOUR <br /><span className="gradient">CRYPTO</span><br /><span className="gradient">PORTFOLIO</span></h1>
        <div className='line'></div>
        <button>Sign Up Now</button>
      </div>

      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${getCardClassName(index)}`}>
            {card}
          </div>
        ))}
      </div>
    </section>
  )
}

export default MainBanner