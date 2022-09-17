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
            position: 'Smart Contract Developer',
            image: 'food_chain'
        },
        {
            name: '夏到政傑',
            position: 'Artist',
            image: 'xia'
        },
        {
            name: '李禎宜',
            position: 'Artist',
            image: 'lee'
        },
        {
            name: 'Alu',
            position: 'Consultant',
            image: 'alu'
        },
        {
            name: 'CookSen',
            position: 'Front End Developer',
            image: 'cooksen'
        },
        {
            name: 'Tck',
            position: 'Front End Developer',
            image: 'tck'
        },
        {
            name: 'ExcitedMail',
            position: 'Back End Developer',
            image: 'excited_mail'
        },
        {
            name: 'Becca',
            position: 'Back End Developer',
            image: 'becca'
        },
        {
            name: 'Corn',
            position: 'Marketing',
            image: 'corn',
        },
        {
            name: 'NN',
            position: 'Marketing',
            image: 'nn'
        },
        {
            name: 'Jack',
            position: 'Marketing',
            image: 'jack'
        },
        {
            name: 'theyhw',
            position: 'Marketing',
            image: 'theyhw'

        },
    ];

    return (
        <div id='team'>
            <div className='members'>
                <img className='left-page' src={left_arrow} onClick={() => changePage(false)} />
                <div className='member-bg'>
                    <img src={require(`../../images/team/${memberData[4*(page-1)].image}.png`)}/>
                    <p className='name'>{memberData[4*(page-1)].name}</p>
                    <p className='pos'>{memberData[4*(page-1)].position}</p>
                </div>
                <div className='member-bg'>
                    <img src={require(`../../images/team/${memberData[4*(page-1)+1].image}.png`)}/>
                    <p className='name'>{memberData[4*(page-1)+1].name}</p>
                    <p className='pos'>{memberData[4*(page-1)+1].position}</p>
                </div>
                <div className='member-bg'>
                    <img src={require(`../../images/team/${memberData[4*(page-1)+2].image}.png`)}/>
                    <p className='name'>{memberData[4*(page-1)+2].name}</p>
                    <p className='pos'>{memberData[4*(page-1)+2].position}</p>
                </div>
                <div className='member-bg'>
                    <img src={require(`../../images/team/${memberData[4*(page-1)+3].image}.png`)}/>
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
