import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MFPLogo from '../assets/MFPLogo.png'

function Footer() {
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
                    <img src={MFPLogo} alt='moreno family logo'/>
                    <p>&copy; 2022 by Mario Family Painting</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
