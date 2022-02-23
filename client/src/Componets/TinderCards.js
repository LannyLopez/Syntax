import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import "../assets/TinderCards.css"

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
                    <h3>first</h3>
                    <h3>last</h3>
                    <h3>email</h3>
                    <h3>github</h3>
                    <h3>languages</h3>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
  )
}

export default TinderCards