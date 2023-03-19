import styles from './main.module.scss';
import svg from './../../assets/pattern-divider-desktop.svg'

export const Main = () => {
    return (
        <main className={styles.mainWrapper}>
            <p><q>It is easy to sit up and take notice, what's difficult is getting up and taking action</q></p>
            <div><img src={svg} alt=''/></div>
        </main>
    )
}