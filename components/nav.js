    // next packages
import Link from 'next/link'
import Image from 'next/image'

    //npm package
import classNames from "classnames/bind"

    //data
import { getNavLinks } from '../lib/api'

    //styles
import styles from './nav.module.scss'

let cx = classNames.bind(styles)

const Nav = ({type}) => {
    const navLinks = getNavLinks();

     let navClasses = cx({
        nav : true,
        desktop : type === "desktop",
        mobile : type === "mobile",
     })
     return <nav className={navClasses}>
        <ul>
            {navLinks.map((navLink, index)=> {
                const { label, path } = navLink
                return <li key={index}>
                    <Link href={path}>
                        <a>
                            {label}
                        </a>
                    </Link>
                </li>
            })}
        </ul>
    </nav>
}

const socialMediaLinks = [
    {
        icon: "facebook",
        path: "https://www.facebook.com/netflix",
    },
    {
        icon: "twitter",
        path: "https://www.twitter.com/netflix",
    },
    {
        icon: "instagram",
        path: "https://www.instagram.com/netflix",
    },
]

const SocialMedia = () => {
    let navClasses = cx({
        nav : true,
        [`social-media`] : true,
     })
    return <nav className={navClasses}>
        <ul>
            {socialMediaLinks.map((socialMediaLink, index) => {
                const { icon, path } = socialMediaLink;
                return <li key={index}> 
                    <a href={path} target="_blank">
                        <Image 
                            src={`/images/icon-${icon}.svg`}
                            altText={`${icon} icon`}
                            width={36}
                            height={36}
                        />
                    </a>
                </li>
            })}
        </ul>
    </nav>
}
Nav.SocialMedia = SocialMedia
export default Nav