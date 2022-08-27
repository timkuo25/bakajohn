import './App.css';
import Theme from './pages/Theme/Theme';
import Main from './pages/Main/Main';
import { useState } from 'react';

const App = () => {
    const [accounts, setAccounts] = useState([]);
    return (
        <div className="app">
            <Theme/>
            <Main accounts={accounts} setAccounts={setAccounts}/>
        </div>
    );
}

export default App;
