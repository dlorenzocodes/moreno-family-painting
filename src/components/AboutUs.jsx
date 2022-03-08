import { motion } from 'framer-motion'
import photo from '../assets/owner-photo.jpg'

function AboutUs() {

    const styles={
        background: `url(${photo})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    const variant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                type: 'tween',
                ease: 'easeInOut',
                duration: 1
            }
        }
    }


    return (
        <motion.section 
            className='about-container'
            variants={variant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            id='about-us'
        >
            <motion.div 
                className='about-info-wrapper'
                variants={variant}
            >
                <h2>Who Are We?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum. 
                </p>
            </motion.div>

            <motion.div 
                className='about-info-photo'
                style={styles}
                variants={variant}
            ></motion.div>
        </motion.section>
    )
}

export default AboutUs
