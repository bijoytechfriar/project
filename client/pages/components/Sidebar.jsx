import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard, faPerson, faCartArrowDown, faAd, faAnchor } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Sidebar.module.css'
import Image from 'next/image'
import { useState } from 'react'

function Sidebar() {
 
  return (
    <div className={styles.Sidecontainer}>
      <div className={styles.logo}>
        <Image className={styles.img} src={'/logo.jpg'} width={100} height={100}></Image>       </div>
      <div className={styles.wrapper}>
        <ul>
          <a href='/' ><button  style={{ height: 40 }}>Dashboard</button></a>
          <a><button style={{ height: 40 }}>Customer</button></a>
          <a ><button style={{ height: 40 }}>Seller</button></a>
          <a  href='/Product'><button style={{ height: 40}}>Products</button></a>
          <a href='/Orders'><button style={{ height: 40 }}>Orders</button></a>
        </ul>

      </div>
    </div>
  )
}

export default Sidebar