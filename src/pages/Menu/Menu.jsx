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
      <div className={styles.cards}>
        <div className={styles.card}>
            <div className={styles.img}>
                <img src="https://content2.flowwow-images.com/data/flowers/1000x1000/34/1667892806_96654834.jpg" alt="" />
            </div>
            <div className={styles.name}>
                <h3>Клубника в белом шоколаде</h3>
            </div>
            <div className={styles.price}>
                <h3>25$</h3>
            </div>
            <div className={styles.btn}>
                <button className={styles.cart}>Добавить в корзину</button>
                <button className={styles.more}>Подробнее</button>
            </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
            <div className={styles.img}>
                <img src="https://content2.flowwow-images.com/data/flowers/1000x1000/34/1667892806_96654834.jpg" alt="" />
            </div>
            <div className={styles.name}>
                <h3>Клубника в белом шоколаде</h3>
            </div>
            <div className={styles.price}>
                <h3>25$</h3>
            </div>
            <div className={styles.btn}>
                <button className={styles.cart}>Добавить в корзину</button>
                <button className={styles.more}>Подробнее</button>
            </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
            <div className={styles.img}>
                <img src="https://content2.flowwow-images.com/data/flowers/1000x1000/34/1667892806_96654834.jpg" alt="" />
            </div>
            <div className={styles.name}>
                <h3>Клубника в белом шоколаде</h3>
            </div>
            <div className={styles.price}>
                <h3>25$</h3>
            </div>
            <div className={styles.btn}>
                <button className={styles.cart}>Добавить в корзину</button>
                <button className={styles.more}>Подробнее</button>
            </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
            <div className={styles.img}>
                <img src="https://content2.flowwow-images.com/data/flowers/1000x1000/34/1667892806_96654834.jpg" alt="" />
            </div>
            <div className={styles.name}>
                <h3>Клубника в белом шоколаде</h3>
            </div>
            <div className={styles.price}>
                <h3>25$</h3>
            </div>
            <div className={styles.btn}>
                <button className={styles.cart}>Добавить в корзину</button>
                <button className={styles.more}>Подробнее</button>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default Menu
