import './App.css';
import Theme from './pages/Theme/Theme';
import Main from './pages/Main/Main';
import { useState } from 'react';

const App = () => {
    const [accounts, setAccounts] = useState([]);
    const [numMint, setNumMint] = useState(1);
    return (
        <div className="app">
            <Theme/>
            <Main accounts={accounts} setAccounts={setAccounts} numMint={numMint} setNumMint={setNumMint}/>
        </div>
    );
}

export default App;
