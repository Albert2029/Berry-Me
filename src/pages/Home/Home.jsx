import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

  const goToMenu = () => {
    navigate('/menu');
  }
  return (
    <div className={styles.home}>
        <h1>Berry Me</h1>
        <h2>Добро пожаловать в Berry Me! Здесь каждая ягода — это маленькая история о вкусе, любви и заботе. Мы создаём десерты, которые радуют сердце и балуют вкусовые рецепторы. Сочетая свежесть ягод и нежность шоколада, мы превращаем обычный день в праздник. Открой для себя сладкий мир, в который всегда хочется возвращаться.</h2>
        <button onClick={goToMenu}>Перейти</button>
    </div>
  )
}

export default Home
