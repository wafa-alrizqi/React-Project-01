import React from 'react'

export default function Card(props) {
  return (
    <>
        <div>
            <img className='img-card' src={props.cards.image}></img>
        </div>
    </>
  );
}
