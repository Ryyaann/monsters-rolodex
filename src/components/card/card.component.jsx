import React from 'react';

import './card.styles.css';

export const Card = (props) => {
    const set = Math.floor(Math.random() * 2);
    return <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set${set}&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
}