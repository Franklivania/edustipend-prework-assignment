import React from 'react'

const Button = ({title, className, onClick, id, children}) => {
  return (
    <button type='button' className={className} id={id} onClick={onClick}>
        <p>{title}</p>
        {children}
    </button>
  )
}

export default Button