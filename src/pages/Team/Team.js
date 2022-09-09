import './Team.css';
import left_arrow from '../../images/intro/left_arrow.png';
import right_arrow from '../../images/intro/right_arrow.png';
import { useState } from 'react';

const Team = () => {
    const [page, setPage] = useState(1);
    const changePage = forward => {
        if (forward){
            if (page === 3) return;
            setPage(page => page + 1);
            return;
        }
        if (page === 1) return;
        setPage(page => page - 1);
        return;
    }
    const memberData = [
        {
            name: 'FoodChain',
            position: 'Smart Contract Developer'
        },
        {
            name: '夏到政傑',
            position: 'Artist'
        },
        {
            name: '李禎宜',
            position: 'Artist'
        },
        {
            name: 'Alu',
            position: 'Consultant'
        },
        {
            name: 'CookSen',
            position: 'Front End Developer'
        },
        {
            name: 'Tck',
            position: 'Front End Developer'
        },
        {
            name: 'ExcitedMail',
            position: 'Back End Developer'
        },
        {
            name: 'Becca',
            position: 'Back End Developer'
        },
        {
            name: 'Corn',
            position: 'Marketing'
        },
        {
            name: 'NN',
            position: 'Marketing'
        },
        {
            name: 'Jack',
            position: 'Marketing'
        },
        {
            name: 'theyhw',
            position: 'Marketing'
        },
    ];

    return (
        <div id='team'>
            <div className='members'>
                <img className='left-page' src={left_arrow} onClick={() => changePage(false)}></img>
                <div className='member-bg'>
                    <img src={require('../../images/nft/1.png')}/>
                    <p className='name'>{memberData[4*(page-1)].name}</p>
                    <p className='pos'>{memberData[4*(page-1)].position}</p>
                </div>
                <div className='member-bg'>
                    <img src={require('../../images/nft/1.png')}/>
                    <p className='name'>{memberData[4*(page-1)+1].name}</p>
                    <p className='pos'>{memberData[4*(page-1)+1].position}</p>
                </div>
                <div className='member-bg'>
                    <img src={require('../../images/nft/1.png')}/>
                    <p className='name'>{memberData[4*(page-1)+2].name}</p>
                    <p className='pos'>{memberData[4*(page-1)+2].position}</p>
                </div>
                <div className='member-bg'>
                    <img src={require('../../images/nft/1.png')}/>
                    <p className='name'>{memberData[4*(page-1)+3].name}</p>
                    <p className='pos'>{memberData[4*(page-1)+3].position}</p>
                </div>
                <img className='right-page' src={right_arrow} onClick={() => changePage(true)}></img>
            </div>
            <img className='baka' src={require('../../images/team/team_john.png')}></img>
        </div>
    );
}

export default Team;
