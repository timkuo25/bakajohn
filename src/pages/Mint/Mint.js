import './Mint.css';
import mintButton from '../../images/mint/mint_button.png';
import Web3 from 'web3';
import abi from '../../bakajohn.json';

const Mint = ({ accounts, setAccounts, numMint, setNumMint }) => {
    const isConnected = Boolean(accounts[0]);
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8080");
    
    const ContractAddress = "0xD8DB486181263F47E9fc2Edf94d3cd8892620041";

    const mumbaiId = 80001;
    const polygonId = 137;

    const changeNum = inc => {
        if (inc) {
            if (numMint === 5) return;
            setNumMint(prev => prev + 1);
            return;
        }
        
        if (numMint === 1) return;
        setNumMint(prev => prev - 1);
        return;
    }

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

    const mint = async (num) => {
        connectAccount();
        if (!isConnected) return;

        if (window.ethereum.networkVersion !== polygonId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: web3.utils.toHex(polygonId) }]
                });
            } catch (err) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'Polygon Mainnet',
                                chainId: web3.utils.toHex(polygonId),
                                nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
                                rpcUrls: ['https://polygon-rpc.com/']
                            }
                        ]
                    });
                }
            }
        }

        const bakajohnContractClaim = new web3.eth.Contract(abi, ContractAddress);
        bakajohnContractClaim.methods.publicSafeMint(accounts[0], num).send({
            from: window.ethereum.selectedAddress
        }).on('error', (error, receipt) => {
            console.log(receipt);
        })

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
            <div className='mint-area'>
                <div className='joystick'>
                    <div className='minus-button' onClick={() => changeNum(0)}></div>
                    <div className='plus-button' onClick={() => changeNum(1)}></div>
                    <span className='num-mint' >0{numMint}</span>
                    <img className='mint-button' src={mintButton} onClick={() => mint(numMint)}/>
                </div>
            </div>

        </div>
    );
}

export default Mint;
