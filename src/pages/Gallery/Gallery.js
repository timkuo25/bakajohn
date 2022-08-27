import './Gallery.css';

const Gallery = () => {
    return (
        <div id='gallery'>
            <div className='gallery-container'>
                <img src={require('../../images/nft/6.png')} width={200}></img>
                <img className='hidden' src={require('../../images/nft/7.png')} width={200}></img>
                <img className='hidden' src={require('../../images/nft/8.png')} width={200}></img>
                <img className='hidden' src={require('../../images/nft/9.png')} width={200}></img>
                <img className='hidden' src={require('../../images/nft/10.png')} width={200}></img>
            </div>
        </div>
    );
}

export default Gallery;
