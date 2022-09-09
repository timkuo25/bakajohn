import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <h3> Follow Us</h3>
            <div className='footer-links'>
                <a href='https://discord.gg/3AmjeCAKyf'>
                    <img src={require('../../images/footer/discord.png')} alt='' width={50}></img>
                </a>
                <a href='https://twitter.com/johnbaka19'>
                    <img src={require('../../images/footer/twitter.png')} alt='' width={50}></img>
                </a>
                <a href='https://www.instagram.com/bakajohn8917/'>
                    <img src={require('../../images/footer/instagram.png')} alt='' width={50}></img>
                </a>
            </div>
            <a href='https://swflab-official.web.app/'> swfLab </a>
        </div>
    );
}

export default Footer;
