import './Faq.css';

const Faq = () => {
    return (
        <div id='faq'>
            <div className='faq-bg'>
                <div className='faq-content'>
                    <p>
                        MINT DAY<br/>
                        <span className='yellow'>→ OUR MINT DAY WILL BE ON SEPTEMBER 17TH.</span>
                    </p>                
                    <p>
                        WHAT IS THE TOTAL VOLUME OF SUPPLY?<br/>
                        <span className='yellow'>→ THERE WILL BE <span className='red'>500</span> UNIQUE HAND-DRAWN COLLECTIBLES.</span>
                    </p>
                    <p>
                        HOW MUCH WILL IT COST TO MINT?<br/>
                        <span className='yellow'>→ ALTHOUGH THIS IS A FREE MINT NFT PROJECT, YOU MIGHT NEED TO PAY SOME GAS FEES TO GET IT.</span><br/>
                    </p>
                    <p>
                        IF I HOLD THIS NFT, WHAT CAN I DO?<br/>
                        <span className='yellow'>→ YOU CAN DO NOTING.</span><br/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Faq;
