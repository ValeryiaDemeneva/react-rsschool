import React from "react";
import './Card.css';


const Card = (props: any): JSX.Element => {
    return (
        <div className='card-conteiner'>
            <img src={props.image} />
            <div className='card-information'>
                <h3 className='card-title'>{props.name}</h3>
                <h4 className='card-location'>{props.location}</h4>
                <p className='card-square'>{props.square}</p>
                <p className='card-rooms'>{props.rooms}</p>
                <p className='card-price'>{props.price}</p>
            </div>
        </div>
    )
}
export default Card;