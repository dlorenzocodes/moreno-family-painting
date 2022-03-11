


function Contact() {

    return (
        <div className='content-wrapper'>

            <section className='headline-section headline-contact-section'>
                <div className="title-wrapper">
                    <h1>Ready for a fresh coat?</h1>
                    <h1>send us a note</h1>
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

                <form >

                    <fieldset className='name-inputs'>
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            placeholder='name'
                        />

                        <input 
                            type='text' 
                            id='lastname' 
                            name='lastname' 
                            placeholder='lastname'
                        />
                    </fieldset>
                
                    <input 
                        type='email' 
                        id='email' 
                        name='email'
                        placeholder='email'
                    />

                    <input 
                        type='phone' 
                        id='phone' 
                        name='phone'
                        placeholder='phone'
                    />

                    <fieldset className='project-options'>
                        <legend>Tell us about your Project:</legend>
                        
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
                        placeholder='message'
                    />
                    <button>Send</button>
                </form>
            </section>
        </div>
    )
}

export default Contact
