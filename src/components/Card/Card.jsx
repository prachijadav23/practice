import React from 'react';
import './card.scss'

const Card = () => {
  return (
    <div className='allcards'>
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
