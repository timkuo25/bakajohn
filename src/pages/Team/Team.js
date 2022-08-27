import './Team.css';

const Team = () => {
    return (
        <div id='team'>
            <div className='members'></div>
            <img src={require('../../images/team/team_john.png')} width={'50%'}></img>
        </div>
    );
}

export default Team;
