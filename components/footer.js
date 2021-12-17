import Image from 'next/image'

import Container from './container'

import styles from './footer.module.scss'
import Nav from './nav'

const Footer = () => {
    return <footer className={styles.footer}>
        <Container>
            <Nav.SocialMedia />
        </Container>
    </footer>
}
export default Footer