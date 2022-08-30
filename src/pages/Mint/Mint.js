import './Mint.css';

const Mint = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    const connectAccount = async () => {
        if (!isConnected){
            if (window.ethereum) {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                });
                setAccounts(accounts);
            }
        }
        return;
    }


    return (
        <div id='mint'>
            <div className='mint-container'>
                <div className='nft-bg-mint'>
                    <img className='mint-image' src={require('../../images/nft/11.png')}></img>
                </div>
                <div className='nft-bg-mint'>
                    <img className='mint-image' src={require('../../images/nft/12.png')}></img>
                </div>
                <div className='nft-bg-mint'>
                    <img className='mint-image' src={require('../../images/nft/13.png')}></img>
                </div>
                <div className='nft-bg-mint'>
                    <img className='mint-image' src={require('../../images/nft/14.png')}></img>
                </div>
            </div>
            <div className='mint-caption'>
                #We'RE ALL BAKAJOHNS#
            </div>
            <div className='mint-date-caption'>
                FREE MINT DATE: 9/17
            </div>
        </div>
    );
}

export default Mint;
