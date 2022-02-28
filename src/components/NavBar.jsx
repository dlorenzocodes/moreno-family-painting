import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VscClose } from 'react-icons/vsc'
import { AiOutlineMenu } from 'react-icons/ai'

function NavBar() {
    return (
        <nav className='main-nav-container'>
            <div className='nav-wrapper'>
                <img src="" alt=""/>
                <div className='mobile-open-close'>
                    <AiOutlineMenu />
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
