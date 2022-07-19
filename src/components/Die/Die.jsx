import './Die.css'
import React from 'react';


const Die = (props) => {

    return (
        <div className='die'>
            <img src={`${process.env.PUBLIC_URL}/assets/${props.source}`}  alt={props.source} />
        </div>
        
    )
}

export default Die;