import styles from './container.module.scss'
export const Container = ( {children} ) => {
    return(
    <div id={styles.container}> {children} </div>
    )
}