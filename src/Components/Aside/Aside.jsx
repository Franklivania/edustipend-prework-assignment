import React from 'react'
import './Aside.scss'
import Button from '../Button/Button'

const Aside = () => {
  return (
    <section>
        <h1>Make your party fun!</h1>
        <p>Create your custom playlist today.</p>

        <Button title={"Create Playlist"} id={"btn"}/>
    </section>
  )
}

export default Aside