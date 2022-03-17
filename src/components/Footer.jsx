import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MFPLogo from '../assets/MFPLogo.png'
import * as Scroll from 'react-scroll'

function Footer() {

    let scroll = Scroll.animateScroll

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    return (
        <footer>
            <div className='footer-wrapper'>
                <Link to='/contact-us'>
                    <motion.p
                        whileHover={{ scale: 1.1 }}
                        className='contact-link'
                    >
                        Contact us
                    </motion.p>
                </Link>

                <div className='copyright'>
                    <img onClick={scrollToTop} src={MFPLogo} alt='moreno family logo'/>
                    <p>&copy; {new Date().getFullYear()} by Mario Family Painting</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
