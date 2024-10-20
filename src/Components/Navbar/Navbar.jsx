import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
            <a href='#about'>About</a>
            <a href='#languages'>Languages</a>
            <a href='#education'>Education</a>
            <a href='#experience'>Experience</a>
            <a href='#skills'>Skills</a>
        </nav>
    </header>
  )
}

export default Navbar