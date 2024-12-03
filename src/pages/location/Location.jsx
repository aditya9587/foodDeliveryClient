import React from 'react'
import style from './Location.module.css'
import CartBar from '../../components/CartNavbar/CartBar'
import Navbar from '../../components/Navbar/Navbar'
import Address from '../../components/Adresss/Address'
import FooterPanel from '../../components/Footer/FooterPanel'

export default function Location() {
  return (<>
   <div className={style.container}>
      <CartBar  />
      <Navbar  />
      <Address />
      
    </div>
    <FooterPanel />
  
  </>
   
  )
}
