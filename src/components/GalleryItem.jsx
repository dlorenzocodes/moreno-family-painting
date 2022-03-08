import { motion } from 'framer-motion'

function GalleryItem({url}) {

    const styles = {
        background: `url(${url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
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
        <li>
            <motion.div
                className='image-wrapper'
                style={styles}
                variants={variant}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            ></motion.div>
        </li>
    )
}

export default GalleryItem
