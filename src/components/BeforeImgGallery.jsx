import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import GalleryItem from './GalleryItem'
import { useContext, useState } from 'react'
import URLContext from '../context/URLContext'
import Spinner from '../components/Spinner'


function BeforeImgGallery() {

    const { loading, beforeImgUrls } = useContext(URLContext)
    const [isVisible, setIsVisible] = useState(3)
    const [disabled, setDisabled] = useState(false)

    const handleLoadMore = () => {
        const urlListLength = beforeImgUrls.length

        if(isVisible >= urlListLength){
            setDisabled(true)
        } else{
            setIsVisible((prevValue) => prevValue + 3)
        }
    }

    if(loading) return <Spinner />

    return (
        <>
            <ul className='images-list'>
                {beforeImgUrls.slice(0, isVisible).map((url) => (
                    <GalleryItem url={url} key={uuidv4()}/>
                ))}
            </ul>

            <motion.button 
                    whileHover={{ 
                        scale: 1.1, 
                        transition: {
                            type: 'tween',
                            ease: 'easeInOut',
                        }
                    }}
                    type='button'
                    onClick={handleLoadMore}
                    className={disabled ? 'load-more-btn hidden' : 'load-more-btn'}
                >   
                    Load More
            </motion.button>
        </>
    )
}

export default BeforeImgGallery
