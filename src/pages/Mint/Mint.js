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
                <img src={require('../../images/nft/11.png')} width={'25%'}></img>
                <img className='hidden' src={require('../../images/nft/12.png')} width={'25%'}></img>
                <img className='hidden' src={require('../../images/nft/13.png')} width={'25%'}></img>
                <img className='hidden' src={require('../../images/nft/14.png')} width={'25%'}></img>
            </div>
        </div>
    );
}

export default Mint;
