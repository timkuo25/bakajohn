import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <Link activeClass="active" className='nav-options' to="intro" spy={true} smooth={true} offset={50} duration={500}>Intro</Link>
                <Link activeClass="active" className='nav-options' to="mint" spy={true} smooth={true} offset={50} duration={500}>Mint</Link>
                <Link activeClass="active" className='nav-options' to="gallery" spy={true} smooth={true} offset={50} duration={500}>Gallery</Link>
                <Link activeClass="active" className='nav-options' to="team" spy={true} smooth={true} offset={50} duration={500}>Team</Link>
                <Link activeClass="active" className='nav-options' to="faq" spy={true} smooth={true} offset={50} duration={500}>FAQ</Link>
            </nav>
        </>
        
    );
}

export default Navbar;
