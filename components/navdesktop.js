import Link from 'next/link'

import styles from './nav.module.scss'

import { getNavLinks } from '../lib/api'

const NavDesktop = () => {
    const navLinks = getNavLinks();
    
}
export default NavDesktop