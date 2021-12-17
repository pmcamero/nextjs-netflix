import styles from './btngroup.module.scss'

const BtnGroup = ({children}) => {
    return <div className={styles.btn_group}>
        {children}
    </div>
}
export default BtnGroup