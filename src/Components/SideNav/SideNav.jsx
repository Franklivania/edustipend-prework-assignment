import React from 'react'
import './SideNav.scss'
import Button from '../Button/Button'

const SideNav = ({id}) => {
  return (
    <div className='sidenav' id={id}>
        <h2>Trending Songs</h2>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>
        <Button title={"Unavailable by Davido"} className={"btn"}>
            <i className="fa-solid fa-plus"></i>
        </Button>

        <Button id={"btn"} title={"View more"}/>
    </div>
  )
}

export default SideNav