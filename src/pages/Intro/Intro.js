import './Intro.css';
import left_grid from '../../images/intro/left_grid.png';
import right_grid from '../../images/intro/right_grid.png';
import left_arrow from '../../images/intro/left_arrow.png';
import right_arrow from '../../images/intro/right_arrow.png';
import cloud_1 from '../../images/intro/cloud_1.png';
import cloud_2 from '../../images/intro/cloud_2.png';
import cloud_3 from '../../images/intro/cloud_3.png';
import cloud_4 from '../../images/intro/cloud_4.png';

import { useState } from 'react';

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
            <img className='left-grid' src={left_grid} alt=''></img>
            <div className='intro-image'>
                <img className='left-arrow' src={left_arrow} onClick={() => changeImage(false)} alt=''></img>
                <div className='nft-bg side'>
                    <img src={centerNum === 1 ? null : require(`../../images/nft/${centerNum - 1}.png`)} width={'100%'} alt=''></img>
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
            &emsp;&emsp;Once upon a time, there was a guy named John. John was a lovely person who liked to play the guitar. John had a beautiful girlfriend, Jenny. Like every boy falling in love, he can do anything for his lover just to see her smile. 
            <br/><br/>
            &emsp;&emsp;However, things were not going well. Jenny was attracted to another guy, "Bagajong" from Taiwan. Jenny was obsessed with Bagajong's tattoo and his fierce appearance. In the end, Jenny cuckolded John and started a relationship with Bagajong. 
            <br/><br/>
            &emsp;&emsp;After losing the love of his life, John lost his mind entirely. He became angry day by day. Finally, he becomes Bakajohn
            <br/><br/>

            ---
            <br/><br/>

            &emsp;&emsp;Every Bakajohn is a free mint dynamic NFT collectible. After each transaction, our picture will change its characteristics. It's a nice guy at first, but it will become more and more angry.
            <br/><br/>

            - step 1 - Normal
            <br/>
            - step 2 - Hair + Facial expression
            <br/>
            - step 3 - Clothes + Accessories 
            </p>
            <img className='right-grid' src={right_grid}></img>
            <img className='cloud-1 hidden' src={cloud_1}></img>
            <img className='cloud-2 hidden' src={cloud_2}></img>
            <img className='cloud-3 hidden' src={cloud_3}></img>
            <img className='cloud-4 hidden' src={cloud_4}></img>
            
        </div>
    );
}

export default Intro;
