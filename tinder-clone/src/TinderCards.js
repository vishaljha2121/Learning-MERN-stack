import React, {useState} from 'react';
import TinderCard from "react-tinder-card"
import "./TinderCards.css";

function TinderCards() {
        const [people, setPeople] = useState([
        {
                name: "Elon Musk",
                url: "https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg"
        },
        {
                name: "Jeff Bezos",
                url: "https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg"
        },
]);

const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //setLastDirection(direction);
};

const outOfFrame = (name) => {
        console.log(name + " left the screen!");
};

        
        return (
                <div className="tinderCards">
                        <div className="tinderCards__cardContainer">
                                {people.map((person) => (
                                        <TinderCard
                                        className="swipe"
                                        key={person.name}
                                        preventSwipe={["up","down"]}
                                        onSwipe={(dir) => swiped(dir, person.name)}
                                        onCardLeftScreen = {() => outOfFrame(person.name)}
                                        >
                                                <div 
                                                style = {{ backgroundImage: `url(${person.url})` }}
                                                className="card">
                                                        <h3>{person.name}</h3>
                                                </div>

                                        </TinderCard>
                                ))}
                        </div>  
                </div>
        );
}

export default TinderCards;
