import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import "../assets/TinderCards.css"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/musk-weed-1536332069.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'
        },
        {
            name: "Jeff Besos",
            url: "http://www.celebrityfunfacts.com/media/Jeff-Bezos-Facts-Biography.jpg"
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
                <div 
                style={{ backgroundImage: `url(${person.url})` }}
                className='card'
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
  )
}

export default TinderCards