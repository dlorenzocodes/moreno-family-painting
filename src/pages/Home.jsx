import { motion } from 'framer-motion'
import { IoHome } from 'react-icons/io5'
import Button from '../components/Button'
import Reviews from '../components/Reviews'
import Gallery from '../components/Gallery'
import AboutUs from '../components/AboutUs'
import { MdDoorSliding } from 'react-icons/md'
import { FaBuilding, FaTools } from 'react-icons/fa'
import {ReactComponent as DeckIcon} from '../assets/deck.svg'
import {ReactComponent as ExteriorIcon} from '../assets/exterior.svg'


function Home() {

    const section = { 
        hidden: { opacity: 0, x: '100vw'}, 
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                type: 'tween',
                ease: 'easeInOut',
                duration: 1,
            } 
        }
    }
    
    const serviceVarient ={
        offscreen: { opacity: 0, x: '100vw' },
        onscreen: {
            opacity: 1,
            x: 0,
            transition:{
                type: 'tween',
                ease: 'easeInOut',
                duration: 1
            }
        }
    }

    const growVarient = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'tween',
                ease: 'easeInOut',
                duration: 1
            }
        }
    }
   
    return (
        <div className='content-wrapper'>
            <section className='headline-section headline-home-section'>
                <motion.div 
                    className='title-wrapper'
                    variants={section}
                    initial='hidden'
                    animate='visible'
                >
                    <h1>Painting Cedar Rapids Homes</h1>
                    <h3>and surrounding areas since 2016</h3>
                    <Button>Request Free Quote</Button>
                </motion.div>
            </section>

            <section 
                id='services' 
                className='services-wrapper'
            >
                <motion.div
                    variants={growVarient}
                    initial='hidden'
                    animate='visible'
                    className='section-info'
                >
                    <h2>How we can serve you</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore  et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation  ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. 
                    </p>
                </motion.div>
                   
                <div className='service-list-wrapper'>

                    <motion.div 
                        className='services-list'
                        variants={serviceVarient}
                        initial='offscreen'
                        animate='onscreen'
                    >

                        <motion.div 
                            className='service-item' 
                            variants={serviceVarient}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{scale: 1.1 }}
                        >
                            <IoHome />
                            <h3>Interior Painting</h3>
                        </motion.div>

                        <motion.div 
                            className='service-item' 
                            variants={serviceVarient}
                            whileHover={{ scale: 1.1}}
                        >
                            <ExteriorIcon 
                                fill='#F05241'
                                width='1em'
                                height='1em'
                            />
                            <h3>Exterior Painting</h3>
                        </motion.div>

                        <motion.div 
                            className='service-item' 
                            variants={serviceVarient}
                            whileHover={{ scale: 1.1}}
                        >
                            <MdDoorSliding />
                            <h3>Cabinet Painting</h3>
                        </motion.div>

                        <motion.div 
                            className='service-item' 
                            variants={serviceVarient}
                            whileHover={{ scale: 1.1}}
                        >
                            <DeckIcon 
                                fill='#F05241'
                                width='1em'
                                height='1em'
                            />
                            <h3>Decks</h3>
                        </motion.div>

                        <motion.div 
                            className='service-item' 
                            variants={serviceVarient}
                            whileHover={{ scale: 1.1}}
                        >
                            <FaTools />
                            <h3>Minor Repairs</h3>
                        </motion.div>

                        <motion.div 
                            className='service-item' 
                            variants={serviceVarient}
                            whileHover={{ scale: 1.1}}
                        >
                            <FaBuilding />
                            <h3>Commercial Painting</h3>
                        </motion.div>

                    </motion.div>

                </div>   

                <motion.div
                        variants={growVarient}
                        initial='hidden'
                        animate='visible'
                        className='section-info'
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore  et dolore </p>
                    <Button>Request Free Quote</Button>
                </motion.div>
            </section>

            <Reviews />
            <Gallery />
            <AboutUs />
        </div>
    )
}

export default Home
