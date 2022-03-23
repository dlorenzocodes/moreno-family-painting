import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion'
import GalleryItem from './GalleryItem'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import URLContext from '../context/URLContext'

function Gallery() {

    const { loading, afterImgUrls } = useContext(URLContext)

    if(loading) return <Spinner />

    return (
        <section  id='gallery' className='gallery-container'>
            <h2>Gallery</h2>
            
            <div className='images-container'>
                <ul className='images-list'>
                   {afterImgUrls.map((url) => (
                       <GalleryItem url={url} key={uuidv4()}/>
                   ))}
                </ul>
            </div>

            <Link 
                to='our-work'
            >
                <motion.button
                    className='gallery-btn' 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{type: 'tween', duration: 0.5}}
                    viewport={{ once: true }}
                >
                    View Recent Work
                </motion.button>
            </Link>
        </section>
    )
}

export default Gallery
