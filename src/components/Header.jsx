import rickMorty from '/rickmorty.png'
import styles from '../features/Design.module.css'


export const Header = () => {
    return (
        <div className={styles.headerAndImg}>
            <img src={rickMorty} className="logo" alt="rick and morty" height="100px" />
            <div className={styles.h1Andh6}>
            <h1>Rick & Morty Trivia</h1>
            <h6>...how many characters?</h6>
            </div>
        </div>
    )
};