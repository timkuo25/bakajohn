import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <h3> Follow Us</h3>
            <div className='footer-links'>
                <img src={require('../../images/footer/discord.png')} width={50}></img>
                <img src={require('../../images/footer/twitter.png')} width={50}></img>
                <img src={require('../../images/footer/instagram.png')} width={50}></img>
            </div>
        </div>
    );
}

export default Footer;
