import React from 'react'
import '../fonts/CreatoDisplay-Light.otf'
import '../fonts/Tommy.otf'
import '../css/Content_style.css'
import poland_icon from '../images/country_icons/poland.png'
import cards from "../countries.json"
import { Link } from 'react-router-dom'

const Content = () => {
  const country_icons = require.context('../images/country_icons', true);
  const bg_images = require.context('../images/content', true);
  const previews = cards.map(country => country['card-preview'][0]);
  return (
    <div className='cards'>
      
{/*       {[...Array(8)].map(x => (
      <div className='card card_1'>
        <img src = {poland_icon} className = "flag" alt = "flag of a country" />
        <div className='card_img'></div>
        <a href='#' className='card_link'>
          <div className="card_img_hover"></div>
        </a>
        <div className='cardInfo'>
          <h3>Poland</h3>
          <p>City: Warsaw</p>
        </div>
      </div>
      ))} */}
      
      {previews.map(card_preview => (
          <Link to = {card_preview.link} className="card" key={card_preview.id}>
          <img 
            src = {country_icons(card_preview['flag-image'])} 
            className = "flag" 
            alt = "flag of a country" 
          />
          <div
           className='card_img'
           style={{backgroundImage: "url(" + bg_images(card_preview['bg-image']) + ")"}}
          ></div>
          <div 
            className="card_img_hover" 
            style={{backgroundImage: "url(" + bg_images(card_preview['bg-image']) + ")"}}
          ></div>
          <div className='cardInfo'>
            <h3>{card_preview.country}</h3>
            <p>City: {card_preview.city}</p>
          </div>
        </Link>
      ))}
      
    </div>
      
  )
}

export default Content