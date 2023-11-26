import React from 'react'
import "../css/TopIntroduction_style.css"
import poland_flag from "../images/country_icons/poland.png"

const TopIntroduction = ({top_image, flag, country_name}) => {
  const flags = require.context('../images/country_icons', true);
  const tops = require.context('../images/content', true);
  return (
    <div 
    className = "top_image"
    style={{backgroundImage: "url(" + tops(top_image)}}
    >
      <h1>{country_name}</h1>
      <img src = {flags(flag)} className = "flag" alt = "flag of a country" />s
    </div>
  )
}

export default TopIntroduction