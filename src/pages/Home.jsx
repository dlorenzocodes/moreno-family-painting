import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {

    const section = { 
        hidden: { opacity: 0 }, 
        visible: { opacity: 1}
    }
    const children = { 
        hidden: { x: '100vw'}, 
        visible: { 
            x: '0', 
            transition: { 
                delay: 0.5, 
                type: 'tween',
                ease: 'easeInOut'
            } 
        }
    }

    return (
        <div className='content-wrapper'>
            <section className='headline-section'>
                <motion.div 
                    className='title-wrapper'
                    variants={section}
                    initial='hidden'
                    animate='visible'
                >
                    <motion.h1 variants={children}>Painting Cedar Rapids Homes</motion.h1>
                    <motion.h3 variants={children}>and surrounding areas since 2016</motion.h3>
                    <motion.span 
                        variants={children}
                        whileHover={{ 
                            backgroundColor: 'rgba(0, 0, 0, 0)', 
                            border: '1px solid #F05241'
                        }}
                        className='headline-cta' 
                    >
                        <Link to='/contact-us'>Request Free Quote</Link>
                    </motion.span>
                
                </motion.div>
            </section>
        </div>
    )
}

export default Home
