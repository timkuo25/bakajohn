import './HorizontalScroll.css';
import dog from '../../images/dog.jpg';

const HorizontalScroll = () => {
    return (
        <div className="scrolling-wrapper">
            <img className='scroll-images' src={dog} alt='dog_image' width={200}></img>
            <img className='scroll-images' src={dog} alt='dog_image' width={200}></img>
            <img className='scroll-images' src={dog} alt='dog_image' width={200}></img>
            <img className='scroll-images' src={dog} alt='dog_image' width={200}></img>
            <img className='scroll-images' src={dog} alt='dog_image' width={200}></img>
            <img className='scroll-images' src={dog} alt='dog_image' width={200}></img>
            <img className='scroll-images' src={dog} alt='dog_image' width={200}></img>
            <img className='scroll-images' src={dog} alt='dog_image' width={200}></img>
            <img className='scroll-images' src={dog} alt='dog_image' width={200}></img>
        </div>
    );
}

export default HorizontalScroll;