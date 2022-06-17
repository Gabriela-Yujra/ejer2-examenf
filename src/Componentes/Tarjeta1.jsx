import React from 'react'
import "../Style/Tarjeta1.css"
import fondo from '../Assets/fondoo.png'


function Tarjeta1() {
  return (
    <div className='Tarjeta1'>
      <div className='card-top'>
      <img src={fondo} alt="" />
      </div>
    </div>
  )
}

export {Tarjeta1}