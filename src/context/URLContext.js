import '../config/firebase'
import { createContext, useState, useEffect } from 'react'
import { ref, getStorage, getDownloadURL, listAll} from 'firebase/storage'

const URLContext = createContext()

export const URLProvider = ({children}) => {

    const [beforeImgPaths, setBeforeImgPaths] = useState([])
    const [afterImgPaths, setAfterImgPaths] = useState([])
    const [beforeImgUrls, setBeforeImgUrls] = useState([])
    const [afterImgUrls, setAfterImgUrls] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getImagesName = async () => {
            try{
                const storage = getStorage()
                const beforeImgRef = ref(storage, 'images/before/')
                const afterImgRef = ref(storage, 'images/after/')
                const beforeRes = await listAll(beforeImgRef)
                const afterRes = await listAll(afterImgRef)
                
                const beforeImagesPaths = []
                const afterImagesPaths = []
    
                beforeRes.items.forEach((img) => {
                    beforeImagesPaths.push(img._location.path)   
                })

                afterRes.items.forEach((img) => {
                    afterImagesPaths.push(img._location.path)   
                })
    
                setBeforeImgPaths(beforeImagesPaths)
                setAfterImgPaths(afterImagesPaths)
                setLoading(false)
            }catch(error){
                console.log(error)
            }
        }

        getImagesName()
    }, [])


    // GETS BEFORE IMAGES URLS
    useEffect(() => {
        const storeUrls = () => {
            return Promise.all(
                beforeImgPaths.map((img) => getImageUrls(img))
            )
        }

        storeUrls()
            .then(url => setBeforeImgUrls(url))
            .catch(err => console.log(err))
    }, [beforeImgPaths])


     // GETS AFTER IMAGES URLS
     useEffect(() => {
        const storeUrls = () => {
            return Promise.all(
                afterImgPaths.map((img) => getImageUrls(img))
            )
        }

        storeUrls()
            .then(url => setAfterImgUrls(url))
            .catch(err => console.log(err))
    }, [afterImgPaths])


    const getImageUrls = (imagePath) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage()
            const storageRef = ref(storage, imagePath)

            getDownloadURL(storageRef)
                .then((downloadURL) => resolve(downloadURL))
                .catch((error) => reject(error))
        }) 
    }


    return <URLContext.Provider value={{
        beforeImgUrls,
        afterImgUrls,
        loading,
    }}>
        {children}
    </URLContext.Provider>
}

export default URLContext