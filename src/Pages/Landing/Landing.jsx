import React from 'react'
import './Landing.scss'
import Navbar from '../../Components/Navbar/Navbar'
import SideNav from '../../Components/SideNav/SideNav'
import Aside from '../../Components/Aside/Aside'

const Landing = () => {
  return (
    <div className='landing'>
        <Navbar />

        <div className="container">
            <Aside />
            <SideNav />
        </div>
    </div>
  )
}

export default Landing