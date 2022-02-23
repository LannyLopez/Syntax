import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import "../assets/TinderCards.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: '',
            email: '',
            github: '',
            languages: ''

        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
        {people.map((person) => (
            <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            >
                <div className='card'>
                    <h3 id='names'>first last</h3>
                    <h3 id='email'>
                    <a href = "mailto: abc@example.com"><EmailIcon />Send Email</a></h3>
                    <h3 id='github'>
                        <a href='https://github.com'><GitHubIcon />GitHub</a></h3>
                    <h3 id='language'>languages</h3>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
  )
}

export default TinderCards