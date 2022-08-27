import './Intro.css';
import left_grid from '../../images/intro/left_grid.png';
import right_grid from '../../images/intro/right_grid.png';
import left_arrow from '../../images/intro/left_arrow.png';
import right_arrow from '../../images/intro/right_arrow.png';
import { useState } from 'react';
// import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll';

const Intro = () => {
    const maxImageNum = 5;
    const [centerNum, setCenterNum] = useState(2);
    
    const changeImage = next => {
        if (next) {
            if (centerNum === maxImageNum) return;
            else setCenterNum(prev => prev + 1);
        }
        else {
            if (centerNum === 1) return;
            else setCenterNum(prev => prev - 1);
        }
    }

    return (
        <div id='intro'>
            {/* <HorizontalScroll/> */}
            <img className='left-grid' src={left_grid}></img>
            <div className='intro-image'>
                <img className='left-arrow' src={left_arrow} onClick={() => changeImage(false)}></img>
                <div className='nft-bg side'>
                    <img src={centerNum === 1 ? null : require(`../../images/nft/${centerNum - 1}.png`)} width={'100%'}></img>
                </div>
                <div className='nft-bg'>
                    <img src={require(`../../images/nft/${centerNum}.png`)} width={'120%'}></img>
                </div>
                <div className='nft-bg side'>
                    <img src={centerNum === maxImageNum || require(`../../images/nft/${centerNum + 1}.png`)} width={'100%'}></img>
                </div>
                <img className='right-arrow' src={right_arrow} onClick={() => changeImage(true)}></img>
            </div>
            <p className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img className='right-grid' src={right_grid}></img>
        </div>
    );
}

export default Intro;
