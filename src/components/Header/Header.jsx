import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
import styles from './header.module.scss'

export const Header = () => {
  const { dados } = useContext(MyContext)
  return (
    <header className={styles.headerWrapper}>
        <span>advice #{dados.id}</span>
    </header>
  )
}