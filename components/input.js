import Images from "next/image"

import styles from './input.module.scss'

const Input = () => {
    return <input 
        type="text" 
        className={styles.input} 
        placeholder="Titles, people, genres..."
    />
    
}
export default Input