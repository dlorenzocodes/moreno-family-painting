
import { Link } from 'react-router-dom'

export default function Button({children}) {

    return (
        <Link className='headline-cta' to='/contact-us'>{children}</Link>
    )
}
