import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VscClose } from 'react-icons/vsc'
import MFPLogo from '../assets/MFPLogo.png'
import { AiOutlineMenu } from 'react-icons/ai'


function NavBar() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <nav className='main-nav-container'>
            <div className='nav-wrapper'>
                <img src={MFPLogo} alt='moreno family logo'/>
                <div 
                    className='mobile-open-close'
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                >
                    { isOpen ? <VscClose className='animation'/> : <AiOutlineMenu className='animation'/>}
                </div>

                <div className='menu-tabs'>
                    <ul>
                        <li>Services</li>
                        <li>Testimonials</li>
                        <li><Link to='/our-work'>Our Work</Link></li>
                        <li>About us</li>
                        <li><Link to='/contact-us'>Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
