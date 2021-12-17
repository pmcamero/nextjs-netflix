import classNames from 'classnames/bind'
import Image from 'next/image'
import styles from './btnui.module.scss'

let cx = classNames.bind(styles)

const BtnUI = ({ icon, clickHandler }) => {
    let btnClasses = cx({
        btn_ui : true,
        menu : icon === "menu",
        search : icon === "search",
        close: icon === "close",
        play: icon === "play",
    })
    return <button className={btnClasses} onClick={clickHandler}> 
        <Image 
            src={`/images/icon-${icon}.svg`}
            altText={`${icon} icon`}
            width={36}
            height={36}
        />
    </button>
}
export default BtnUI