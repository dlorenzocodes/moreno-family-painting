
import { motion } from 'framer-motion'
import { useState } from 'react'


function Portfolio() {

    const [beforeBtn, setBeforeBtn] = useState(true)
    const [afterBtn, setAfterBtn] = useState(false)

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

    const handleClick = (e) => {
        if(e.target.id === 'before'){
            setBeforeBtn(true)
            setAfterBtn(false)
        } else{
            setBeforeBtn(false)
            setAfterBtn(true)
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
                        onClick={handleClick} 
                        className={beforeBtn ? 'active' : null}
                        type='button'
                        id='before'
                    >
                        Before
                    </button>
                    <button 
                        onClick={handleClick} 
                        className={afterBtn ? 'active' : null}
                        type='button'
                        id='after'
                    >
                        After
                    </button>
                </div>

                <div className='images-container'>

                </div>
            </section>
        </div>
    )
}

export default Portfolio
