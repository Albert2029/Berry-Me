import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.left}>
        <div className={styles.berry}>
            <h3>Berry Me</h3>
        </div>
        <div className={styles.support}>
            <p>При возникновении ошибки во время заказа обратитесь к нам</p>
        </div>
        <div className={styles.icons}>
            <FaInstagram />
            <FaWhatsapp />
            <FaTelegramPlane />
        </div>
        </div>
        <div className={styles.contacts}>
            <h3>Контакты</h3>
            <div>
                <p className={styles.nomer}>+996 700 556 548</p>
                <p className={styles.email}>taalaibekovbael@gmail.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
