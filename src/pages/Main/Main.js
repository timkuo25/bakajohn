import './Main.css';
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../Intro/Intro';
import Mint from '../Mint/Mint';
import Gallery from '../Gallery/Gallery';
import Team from '../Team/Team'
import Faq from '../Faq/Faq';
import Roadmap from '../Roadmap/Roadmap';
import Footer from '../Footer/Footer';

const Main = ({ accounts, setAccounts }) => {
    return (
        <div className='main'>
            <Navbar/>
            <Intro/>
            <Roadmap/>
            <Mint accounts={accounts} setAccounts={setAccounts}/>
            <Gallery/>
            <Team/>
            <Faq/>
            <Footer/>
        </div>
    );
}

export default Main;
