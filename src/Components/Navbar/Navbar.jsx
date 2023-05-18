import React from 'react'
import './Navbar.scss'
import Button from '../Button/Button'

const Navbar = () => {
  return (
    <header>
        <Button title={"Contact us"} id={"contact"}/>
        <Button title={"SignUp"} id={"sign"} />
    </header>
  )
}

export default Navbar