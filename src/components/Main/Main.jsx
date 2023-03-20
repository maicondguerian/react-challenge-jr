import styles from './main.module.scss';
import svg from './../../assets/pattern-divider-desktop.svg'
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';

export const Main = () => {
    const { dados } = useContext(MyContext)
    return (
        <main className={styles.mainWrapper}>
            <p><q> {dados.advice} </q></p>
            <div><img src={svg} alt=''/></div>
        </main>
    )
}