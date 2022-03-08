import '../config/firebase'
import { createContext, useState, useEffect } from 'react'
import { ref, getStorage, getDownloadURL, listAll} from 'firebase/storage'

const URLContext = createContext()

export const URLProvider = ({children}) => {

    const [imagesName, setImagesName] = useState([])
    const [photoUrls, setPhotoUrls ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getImagesName = async () => {
            try{
                const storage = getStorage()
                const imagesRef = ref(storage, 'images/')
                const res = await listAll(imagesRef)

                const imagesNameList = []

                res.items.forEach((img) => {
                    imagesNameList.push(img.name)
                })

                setImagesName(imagesNameList)
                setLoading(false)
            }catch(error){
                console.log(error)
            }
        }
        
        getImagesName()
    }, [])


    useEffect(() => {
        const storeUrls = () => {
            return Promise.all(
                imagesName.map((img) => getImageUrls(img))
            )
        }

        storeUrls()
            .then(url => setPhotoUrls(url))
            .catch(err => console.log(err))
    }, [imagesName])


    const getImageUrls = (photoName) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage()
            const storageRef = ref(storage, 'images/' + photoName)

            getDownloadURL(storageRef)
                .then((downloadURL) => resolve(downloadURL))
                .catch((error) => reject(error))
        }) 
    }


    return <URLContext.Provider value={{
        photoUrls,
        loading,
    }}>
        {children}
    </URLContext.Provider>
}

export default URLContext