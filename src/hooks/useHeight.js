import { useState, useEffect } from 'react'

export function useHeight(listRef) {

    const [resizedHeight, setResizedHeight] = useState(null)
    const [isResized, setIsResized] = useState(false)

    const onResize = () => {
        const items = listRef.current.children
        const reviewHeight = items[0].clientHeight
        setResizedHeight(reviewHeight)
        setIsResized(true)
    }


    useEffect(() => {
       
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    })

  return { resizedHeight, isResized }
}
