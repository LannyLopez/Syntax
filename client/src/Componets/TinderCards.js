import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../graphql/queries';
import TinderCard from "react-tinder-card"
import "../assets/TinderCards.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const TinderCards = () => {

    const { data } = useQuery(QUERY_USERS);
    const users = data?.users || [];
    console.log(users);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
        {users.map((users) => (
            <TinderCard
            className='swipe'
            key={users.github}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, users.github)}
            onCardLeftScreen={() => outOfFrame(users.github)}
            >
                <div className='card'>
                    <h3 id='names' key={users.firstName}>{users.firstName} {users.lastName}</h3>
                    <h3 id='email'>
                        <a href={"mailto:" + users.email} target="_blank" rel="noopener noreferrer"><EmailIcon /> Email</a></h3>
                    <h3 id='github'>
                        <a href={'https://github.com/' + users.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a></h3>
                    <div>
                        <img alt="cardpic" className='picContainer' id="profilePic" src={users.profilePic} />
                    </div>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
  )
}

export default TinderCards