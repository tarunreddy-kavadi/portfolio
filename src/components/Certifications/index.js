import React from 'react'
import { useState,useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portfolio from '../../Data/portfolio.json'
function Certificate() {
    const [letterClass,setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('animate-hover-text')
       }, 3000)
     }, [])

     const rennderPortfolio =(portfolio)=>{
      return (
        <div className='image-container'>
          {
     portfolio.map((port, idx)=>{   
      return (
        <div className="img-box" key={idx}>
        <img src={port.img} alt="" className='card-img'/>
        <div className='content'>
        <p className="title">{port.title}</p>
        <h4 className="description">{port.description}</h4>
       <button className="btn" onClick={() => window.open(port.link)}>View</button>
        </div>
        </div>
      )
     })}
     </div>
      )}
  return (
    
      <div className="container certifications-page">
        <div className="text-zone">
          <h1 className='content'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'E', 'R', 'T', 'I', 'F', 'I', 'C','A','T','I','O','N','S']}
              idx={15}
            />
          </h1>
          
          </div>
          {rennderPortfolio(portfolio.portfolio)}
        </div>
   )
}

export default Certificate
