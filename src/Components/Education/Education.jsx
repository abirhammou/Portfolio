import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className='container'>        
        <h2>Education</h2>
    
    <div className='timeline'>
        <div className='container-c left-container'>
            <div className='text-box'>
                <h3>Institut supérieur des études technologique.</h3>
                <small>Siliana - 2024</small>
                <p>Licence appliquée en développement des systèmes d’information.</p>
                <span className='left-container-arrow'></span>
            </div>
        </div>

        <div className='container-c right-container'>
            <div className='text-box'>
                <h3>Lycée Carthage Présidence.</h3>
                <small>Carthage Présidence - 2020</small>
                <p>Baccalauréat scientifique option technique.</p>
                <span className='right-container-arrow'></span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Education