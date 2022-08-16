import './Mint.css';
import dog from '../../images/dog.jpg';

const Mint = () => {
    return (
        <div id='mint'>
            <div className='mint-container'>
                <div className='mint-info'>
                    <div className='mint-content'>
                        Mint 內文 可以像 frame 2 直接放或做個框框
                    </div>
                    <div className='mint-function'>
                        <input type="number"/>
                        <button>Mint 鈕</button>
                    </div>
                </div>
                <div className='mint-sample'>
                    <div className='img-row'>
                        <img src={dog} alt='dog' width={200}/>
                        <img src={dog} alt='dog' width={200}/>
                    </div>
                    <div className='img-row'>
                        <img src={dog} alt='dog' width={200}/>
                        <img src={dog} alt='dog' width={200}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Mint;
