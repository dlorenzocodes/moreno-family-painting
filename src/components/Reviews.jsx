import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdOutlineArrowBackIosNew  } from 'react-icons/md'

function Reviews() {

    const [current, setCurrent] = useState(0)
    const [position, setPosition] = useState(null)
    const [slide, setSlide] = useState(null)
    const [diableForwardBtn, setDisableForwardBtn] = useState(false)
    const [diableBackwardBtn, setDisableBackwardBtn] = useState(true)
    const listRef = useRef()

    const style = {
        transform: `translateX(-${slide}px)`
    }

    const reviews = [
        {
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.`,
            author: '— Donna Lorenzo'
        },
        {
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.`,
            author: '— John Doe'
        },
        {
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.`,
            author: '— Yoan Lorenzo'
        }

    ]


    useEffect(() => {
        const items = listRef.current.children
        const width = items[0].offsetWidth
        setPosition(width)
    }, [])


    const handleForwardArrow = () => {
        setCurrent(current === reviews.length - 1 ? 0 : current + 1)
        const reviewList = listRef.current.children
        slideForward([...reviewList])
    }

    const handleBackArrow = () => {
        setCurrent(current === 0 ? reviews.length - 1 : current - 1)
        const reviewList = listRef.current.children
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
        <section className='reviews-container'>
            <h2>Reviews</h2>
            <div className='arrows-container'>
                <button 
                    className={diableBackwardBtn ? 'unabled' : null}
                    type='button'
                    onClick={handleBackArrow}
                    disabled={diableBackwardBtn}
                >
                    <MdOutlineArrowBackIosNew/>
                </button>
                <button
                    className={diableForwardBtn ? 'unabled' : null}
                    type='button'
                    onClick={handleForwardArrow}
                    disabled={diableForwardBtn}
                >
                    <MdArrowForwardIos/>   
                </button>
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
