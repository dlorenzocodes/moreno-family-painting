import { useState } from 'react';

export const useFormValidation = () => {

    const [error, setError] = useState({
        msg: null
    })

    const validateForm = (name, lastname, email, phone) => {
        const letters = /^[A-Za-z]+$/
        const phoneRegex = /^([0-9]{3})?[-.]?([0-9]{3})?[-.]?([0-9]{4})$/

        if( name === '' ||
            email === '' ||
            lastname === '' ||
            phone === ''
        ){
            setError({ msg: 'All required fields must be filled in!' })
            return
        } else if( 
            letters.test(name) === false|| 
            letters.test(lastname) === false ||
            phoneRegex.test(phone) === false
        ){
            setError({ msg: 'Some fields are invalid!'})
            return
        } else{
            setError({
                msg: null
            })
        }
    }


    return { validateForm, error }
}