
import { useState } from 'react'
import { motion } from 'framer-motion'
import AfterImgGallery from '../components/AfterImgGallery'
import BeforeImgGallery from '../components/BeforeImgGallery'




function Portfolio() {


    const [isActive, setIsActive] = useState(true)

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

    return (
        <div className='content-wrapper'>
            <section className='headline-section headline-gallery-section' >
                <motion.div 
                    className="title-wrapper"
                    variants={section}
                    initial='hidden'
                    animate='visible'
                >
                    <h1>See what we</h1>
                    <h1>have done</h1>
                </motion.div>
            </section>

            <section className='images-section-wrapper'>
                <div className='before-after-btns'>
                    <button 
                        onClick={() => setIsActive(isActive => !isActive)} 
                        className={isActive ? 'active' : null}
                        type='button'
                        id='before'
                    >
                        Before
                    </button>
                    <button 
                        onClick={() => setIsActive(isActive => !isActive)} 
                        className={!isActive ? 'active' : null}
                        type='button'
                        id='after'
                    >
                        After
                    </button>
                </div>

                <div className='images-container'>
                    {isActive ? <BeforeImgGallery /> : <AfterImgGallery />}
                </div>
            </section>
        </div>
    )
}

export default Portfolio
