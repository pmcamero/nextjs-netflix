import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return <>
    <Header />
    {children}
    <Footer />
  </>
}
import styles from './layout.module.scss'

export default  Layout