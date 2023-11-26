import React from 'react'
import "../css/InfoMap_style.css"
import Map from './Map'
import {ImCross} from 'react-icons/im'
import { useState } from 'react'
import { useEffect } from 'react'

const InfoAndMap = ({smallInfo, map_cards, map}) => {
    const card_images = require.context('../images/content', true);
    

    const [cards, setCards] = useState([]);
    useEffect(() => {
        map_cards[0]['hidden'] = false;
        setCards(map_cards);
    }, []);
    const hideCards = () => {
        const new_cards = cards.map((card) => ({ ...card, hidden: true }));
        setCards(new_cards);
    }
    const showCard = (card_id) => {
        const new_cards = cards.map((card) => ({ ...card, hidden: card.id === card_id ? false : true }));
        setCards(new_cards);
    }

    return (
        <div className = "info_map">
            <div className = "info">
                <h3>Small info</h3>
                <p>{smallInfo}</p>
            </div>
            <Map map_image={map} showCard={showCard} map_cards={map_cards}/>
            {/* <div className='map'>
                <img draggable = "false" src = {poland_map} />
                <button 
                    id = "btn1"
                    style={{top: "47%", left: "65%"}}
                    onClick={() => showCard("place_card_1")}
                ></button>
            </div> */}

            {cards.map((card) => (
                <div key = {card.id}
                    className='place_card'
                    style={card.hidden ? {display: "none"} : {display: "block"}}
                >
                    <div className='image'
                        style={{backgroundImage: "url(" + card_images(card['image']) + ")"}}
                    >
                        <ImCross 
                        onClick={hideCards}
                        role='button' 
                        className='cross'
                        />
                    </div>
                    <h2>{card.name}</h2>
                </div>)
                )}
        </div>
    )
}

export default InfoAndMap