import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>BERRY ME</h2>
      </div>
      <div className={styles.href}>
        <a href="">О нас</a>
        <a href="">Контакты</a>
        <a href="">Отзывы</a>
        <a href="">Каталог</a>
      </div>
    </header>
  )
}

export default Header
