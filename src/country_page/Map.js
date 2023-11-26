import { map } from 'lodash'
import React from 'react'
import mapi from "../images/maps/Poland.png"

const Map = ({map_image, showCard, map_cards}) => {
  const maps = require.context("../images/maps", true);
  console.log(maps(map_image))
  return (
    <div className='map'>
        <img draggable = "false" src = {maps(map_image)} />
        {map_cards.map((card) => (
          <button 
            key = {card['id']}
            id = {card['id']}
            style={{top: card['procent-cords'][0] + "%", left: card['procent-cords'][1] + "%"}}
            onClick={() => showCard(card['id'])}
          ></button>
        ))}
    </div>
  )
}

export default Map