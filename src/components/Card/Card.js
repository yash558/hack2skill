import React from 'react'
import './Card.css';
const Card = (props) => {
    return (
        <div className="card">
            <img className='card_img' src={props.img} alt="" height={400} width={80} />
            <div className="card_intro">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card