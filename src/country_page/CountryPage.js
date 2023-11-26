import React, { useState } from 'react'
import Header from '../Header'
import TopIntroduction from './TopIntroduction'
import InfoAndMap from './InfoAndMap'
import Recomendations from './Recomendations'

const CountryPage = ({content_json}) => {
  const map_cards = content_json['map-cards'];
  const recomendations = content_json['recomendations'];
  return (
    <div>
        <Header />
        <TopIntroduction 
          top_image={content_json['top-image']}
          flag={content_json['flag-image']}
          country_name={content_json['country']}
        />
        <InfoAndMap smallInfo={content_json['small-info']} map_cards={map_cards} map={content_json['map']}/>
        <Recomendations recs={recomendations} />
    </div>
  )
}

export default CountryPage