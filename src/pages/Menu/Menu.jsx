import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div>
      <div className={styles.search}>
        <input type="text" placeholder='Искать товар'/>
        <button>Поиск</button>
      </div>
        <div className={styles.icons}>
        <GiShoppingCart />
        </div>
      <div></div>
    </div>
  )
}

export default Menu
