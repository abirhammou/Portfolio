import React from 'react'
import './Information.css'
import profileImage from '../assets/profile.jpg'
import { Phone, Mail, Linkedin, MapPinHouse } from 'lucide-react'

const Information = () => {
  return (
    <div className='information-section'>
        <div className='profile-container'>
            <div className='profile-info'>
                <h1>Abir Hammou</h1>
                <h2>IT Student</h2>
                <p>I hold a Bachelor’s degree in Information Development Systems 
            and am currently pursuing my Engineering degree, 
            making me a dedicated and passionate student.</p>
            </div>
            <div className='profile-photo'>
                <img src={profileImage} alt='Profile' />
            </div>
            <div className='contact-info'>
                <a href='tel:+21650745222' className='icon-link' ><Phone /></a>
                <a href='mailto:abirhammou2001@gmail.com' className='icon-link'><Mail /></a>
                <a href='www.linkedin.com/in/abir-hammou-59a1042a6' className='icon-link'><Linkedin /></a>
                <a href='https://maps.app.goo.gl/9imSX2YHp9qeQex97' className='icon-link'><MapPinHouse /></a>
            </div>

        </div>

    </div>
  )
}

export default Information