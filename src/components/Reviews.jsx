import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion'
import { reviews } from '../utils/reviews'
import { useHeight } from '../hooks/useHeight';
import { MdArrowForwardIos } from 'react-icons/md'
import { useState, useEffect, useRef } from 'react'
import { MdOutlineArrowBackIosNew  } from 'react-icons/md'

function Reviews() {

    const [current, setCurrent] = useState(0)
    const [position, setPosition] = useState(null)
    const [slide, setSlide] = useState(null)
    const [diableForwardBtn, setDisableForwardBtn] = useState(false)
    const [diableBackwardBtn, setDisableBackwardBtn] = useState(true)
    const [height, setHeight] = useState(null)

    const listRef = useRef()
    const containerRef = useRef()
    
    const { resizedHeight, isResized } = useHeight(listRef)

    const style = {
        transform: `translateX(-${slide}px)`,
        height: `${ isResized ? resizedHeight : height}px`

    }

    useEffect(() => {
        const items = listRef.current.children
        const width = items[0].offsetWidth
        const reviewHeight = items[0].clientHeight
        setHeight(reviewHeight)
        setPosition(width)
    }, [])

    const handleForwardArrow = (reviewList) => {
        setCurrent(current === reviews.length - 1 ? 0 : current + 1)
        slideForward([...reviewList])
    }

    const handleBackArrow = (reviewList) => {
        setCurrent(current === 0 ? reviews.length - 1 : current - 1)
        slideBackwards([...reviewList])
    }

    const slideForward = (listRef) => {
        const activeReview = listRef.filter((review) => review.classList.value === 'review-item active')
        const lastReview = listRef[listRef.length - 1]
        let nextReview = activeReview[0].nextElementSibling
        let leftValue
        
        if(nextReview === lastReview){
            leftValue = nextReview.offsetLeft
            setSlide(leftValue)
            setDisableForwardBtn(true)
            return
        } else{
            leftValue = nextReview.offsetLeft
            setSlide(leftValue)
            setDisableBackwardBtn(false)
        }
    }

    const slideBackwards = (listRef) => {
        const activeReview = listRef.filter((review) => review.classList.value === 'review-item active')
        const firstReview = listRef[0]
        let prevReview = activeReview[0].previousElementSibling
        let leftValue

        if(prevReview === firstReview){
            setSlide(0)
            setDisableBackwardBtn(true)
            return
        } else{
            leftValue = prevReview.offsetLeft
            setSlide(leftValue)
            setDisableForwardBtn(false)
        }
    }

    
    return (
        <section  
            id='reviews' 
            className='reviews-container' 
            ref={containerRef}
        >
            <h2>Reviews</h2>
            <div className='arrows-container'>
                <motion.button 
                    className={diableBackwardBtn ? 'unabled' : null}
                    type='button'
                    onClick={() => handleBackArrow(listRef.current.children)}
                    disabled={diableBackwardBtn}
                    whileTap={{ scale: 1.1 }}
                >
                    <MdOutlineArrowBackIosNew/>
                </motion.button>
                <motion.button
                    className={diableForwardBtn ? 'unabled' : null}
                    type='button'
                    onClick={() => handleForwardArrow(listRef.current.children)}
                    disabled={diableForwardBtn}
                    whileTap={{ scale: 1.1 }}
                >
                    <MdArrowForwardIos/>   
                </motion.button>
            </div>

            <div 
                className='reviews-list' 
                ref={listRef}
                style={style}
            >
                {reviews.map((review, index) => (
                    
                    <div
                        className={index === current ? 
                        'review-item active' : 'review-item'} 
                        key={uuidv4()}
                        style={{ left: `${position * index}px`}}
                    >
                        <p>{review.review}</p>
                        <span>{review.author}</span>
                    </div>
               ))}
            </div>
        </section>
    )
}

export default Reviews
