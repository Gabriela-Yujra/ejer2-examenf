import React from 'react'
import '../Style/Tarjeta3.css'
import perfil from '../Assets/Ellipse1.png'

function Tarjeta3() {
  return (
    <div className='Tarjeta3'>
        <div className='perfil-top'>
            <img src={perfil} alt="" />
        </div>
    </div>
  )
}

export {Tarjeta3}