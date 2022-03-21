import DOMPurify from 'dompurify';
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useFormValidation } from '../hooks/useFormValidation'


function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
    })

    const { name, lastname, email, phone, message } = formData

    const { validateForm, error } = useFormValidation()

    const handleForm = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const isValid = validateForm(name, lastname, email, phone)

        if(!isValid){
            e.preventDefault()
        } else{
            const cleanMessage = DOMPurify.sanitize(message, {FORBID_TAGS: ['img', 'a', 'script', 'svg']})
            formData.message = cleanMessage
            fetch('/', {
                method:'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                body: encode({ 'form-name': 'contact', ...formData})
            })
                .then(() =>  toast.success('Thank you for your submission. We will contact you shortly!'))
                .then(() =>  setFormData({
                        name: '',
                        lastname: '',
                        email: '',
                        phone: '',
                        message: '',
                    })
                )
                .catch( error => toast.error(error))
        }
    }

    const variant = {
        hidden: { opacity: 0}, 
        visible: { 
            opacity: 1, 
            transition: { 
                type: 'tween',
                ease: 'easeInOut',
                duration: 1,
            } 
        }
    }


    return (
        <div className='content-wrapper'>

            <section className='headline-section headline-contact-section'>
                <div className="title-wrapper">
                    <motion.h1
                        variants={variant}
                        initial='hidden'
                        animate='visible'
                    >
                        Ready for a fresh coat?
                    </motion.h1>
                    <motion.h1
                        variants={variant}
                        initial='hidden'
                        animate='visible'
                    >
                        send us a note
                    </motion.h1>
                </div>
            </section>

            <section className='contact-info-container'>
     
                <div className='contact-info'>
                    <h2>Contact us</h2>
                    <div>
                        <p>000-000-0000</p>
                        <p>email@email.com</p>
                    </div>
                </div>

                <form 
                    name='contact' 
                    method='POST' 
                    data-netlify="true" 
                    onSubmit={handleSubmitForm}
                >
                    {error.msg !== null ? <p className='error'>{error.msg}</p> : null}

                    <input type='hidden' name='form-name' value='contact'/>
                    <fieldset className='name-inputs'>
                        <div id='input-name'>
                            <label htmlFor='name'>Name: *</label>
                            <input 
                                type='text' 
                                id='name' 
                                name='name' 
                                placeholder='John'
                                value={name}
                                onChange={handleForm}
                            />
                        </div>
                       
                        <div id='input-lastname'>
                            <label htmlFor='lastname'>Lastname: *</label>
                            <input 
                                type='text' 
                                id='lastname' 
                                name='lastname' 
                                placeholder='Doe'
                                value={lastname}
                                onChange={handleForm}
                            />
                        </div>
                       
                    </fieldset>

                    <label htmlFor='email'>Email: *</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email'
                        placeholder='email@email.com'
                        value={email}
                        onChange={handleForm}
                    />

                    <label htmlFor='email'>Phone: *</label>     
                    <input 
                        type='phone' 
                        id='phone' 
                        name='phone'
                        placeholder='555-555-5555'
                        value={phone}
                        onChange={handleForm}
                    />

                    <fieldset className='project-options'>
                        <legend>Tell us about your Project <span>(Opt.)</span> : </legend>
                        
                        <div>
                            <input type='checkbox' id='interior' name='interior'/>
                            <label htmlFor='interior'>Interior Painting</label>
                        </div>

                        <div>
                            <input type='checkbox' id='exterior' name='exterior'/>
                            <label htmlFor='exterior'>Exterior Painting</label>
                        </div>

                        <div>
                            <input type='checkbox' id='cabinet' name='cabinet'/>
                            <label htmlFor='cabinet'>Cabinet Painting</label>
                        </div>

                        <div>
                            <input type='checkbox' id='deck' name='deck'/>
                            <label htmlFor='deck'>Deck</label>
                        </div>
                        
                        <div>
                            <input type='checkbox' id='repairs' name='repairs'/>
                            <label htmlFor='repairs'>Minor Repairs</label>
                        </div>

                        <div>
                            <input type='checkbox' id='commercial' name='commercial'/>
                            <label htmlFor='commercial'>Commercial Painting</label>
                        </div>

                    </fieldset>

                    <textarea 
                        id='message' 
                        name='message' 
                        rows='5'
                        cols='33'
                        placeholder='message (opt.)'
                        value={message}
                        onChange={handleForm}
                    />
                    <motion.button 
                        type='submit'
                        whileHover={{ scale: 1.1, borderRadius: '5px'}}
                    >
                        Send
                    </motion.button>
                </form>
                <ToastContainer/>
            </section>
        </div>
    )
}

export default Contact
