import { Link } from 'react-router-dom'
import { VscClose } from 'react-icons/vsc'
import MFPLogo from '../assets/MFPLogo.png'
import { Link as LinkS } from 'react-scroll'
import { useLocation } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState, useRef, useEffect } from 'react'


function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState(null)
    const [display, setDisplay] = useState(null)
    const navHight = useRef()
    const location = useLocation()
   
    useEffect(() => {
       setIsOpen(false)
    }, [location])

   let style = { height: `${height}`, display: `${display}`}
 
    useEffect(() => {
        if(isOpen){
            setDisplay('flex')
            const navBarHeight = navHight.current.clientHeight + 'px'
            setTimeout(() => { setHeight(navBarHeight) }, 50)
            setHeight(0)
        } else{
            setHeight(0)
            setTimeout(() => {
                setHeight('auto')
                setDisplay('')
            }, 300)
        }
    }, [isOpen])


    return (
        <nav className='main-nav-container'>
            <div className='nav-wrapper'>
                <Link to='/'><img src={MFPLogo} alt='moreno family logo'/></Link>
                <div 
                    className='mobile-open-close'
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                >
                    { isOpen ? <VscClose className='animation'/> : <AiOutlineMenu className='animation'/>}
                </div>
            </div>

            <div 
                className='menu-tabs'
                
            >
                <ul
                    className={isOpen ? 'active' : null}
                    ref={navHight}
                    style={style}
                >
                    
                    <Link to='/'>
                    <li
                        className={location.pathname === '/' ? 'hidde' : null }
                    >
                        Home
                    </li>
                    </Link>

                    <li className={location.pathname === '/' ? null : 'hidde' }>
                        <LinkS 
                            activeClass='active'
                            to='services'
                            spy={true}
                            smooth={true}
                        >
                            Services
                        </LinkS>
                    </li>

                    <li className={location.pathname === '/' ? null : 'hidde'}>
                        <LinkS
                            activeClass='active'
                            to='reviews'
                            spy={true}
                            smooth={true}
                        >
                            Testimonials
                        </LinkS>
                    </li>

                    <Link to='/our-work'>
                        <li>
                            Our Work
                        </li>
                    </Link>
                   
                    <li className={location.pathname === '/' ? null : 'hidde' }>
                        <LinkS
                            activeClass='active'
                            to='about-us'
                            spy={true}
                            smooth={true}
                        >
                            About us
                        </LinkS>
                    </li>

                    <Link to='/contact-us'>
                    <li>Contact us</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
