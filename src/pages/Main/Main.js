import './Main.css';
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../Intro/Intro';
import Mint from '../Mint/Mint';
import Gallery from '../Gallery/Gallery';
import Team from '../Team/Team'
import Faq from '../Faq/Faq';

const Main = () => {
    return (
        <div className='main'>
            <Navbar/>
            <Intro/>
            <Mint/>
            <Gallery/>
            <Team/>
            <Faq/>
        </div>
    );
}

export default Main;
