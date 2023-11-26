import React from 'react'
import "../css/Recomendations_style.css"

const Recomendations = ({recs}) => {
  return (
    <div className='recomendations'>
        <h3>Places to visit: </h3>
        {recs.map((rec, index) => 
        <div key={rec['id']} className='rec_box'>
            <h2>{index+1}</h2>
            <div>
                <h3>{rec['name']}</h3>
                <p>{rec['info']}</p>
            </div>
        </div>
        )}
    </div>
  )
}

export default Recomendations