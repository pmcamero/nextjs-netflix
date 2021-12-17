import classNames from 'classnames/bind'

import styles from './heading.module.scss'

let cx = classNames.bind(styles)

const Heading = ({ type, children }) => {
    let headingClasses = cx ({
        heading : true,
        h1: type === "h1",
        h2: type === "h2",
        h3: type === "h3",
        h4: type === "h4",
        h5: type === "h5",
        h6: type === "h6",
    })
    
    return type === "h1" ? <h1 className={headingClasses}>{children}</h1>
        : type === "h2" ? <h2 className={headingClasses}>{children}</h2>
        : type === "h3" ? <h3 className={headingClasses}>{children}</h3>
        : type === "h4" ? <h4 className={headingClasses}>{children}</h4>
        : type === "h5" ? <h5 className={headingClasses}>{children}</h5>
        : <h6 className={headingClasses}>{children}</h6>
}
export default Heading