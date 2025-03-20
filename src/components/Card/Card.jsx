import React from 'react';
import './Card.scss'

const Card = () => {
  return (
    <div>
       <div className='card'>
        <div className='inner-card'>
            <div className='front'>
                <h3>Front card</h3>
            </div>
            
            <div className='back'>
                <h3>Back card</h3>
            </div>
            </div>
       </div>
    </div>
  )
}

export default Card;
