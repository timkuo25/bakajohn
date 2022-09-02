import './Team.css';

const Team = () => {
    return (
        <div id='team'>
            <div className='members'>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
                <div className='member-bg'></div>
            </div>
            <img className='baka' src={require('../../images/team/team_john.png')}></img>
        </div>
    );
}

export default Team;
