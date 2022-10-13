import React from "react";
import './RenderCard.css';

interface ICardsProps {
    switcherValue: boolean,
    nameInputValue: string,
    locationValue: string,
    squareInputValue: string,
    priceInputValue: string,
    dateInputValue: string,
    fileInputValue: string,
}


const Card = ({ switcherValue, nameInputValue, locationValue, squareInputValue, priceInputValue, dateInputValue, fileInputValue }: ICardsProps) => {

    return (
        <div className='card-conteiner'>
            <img className='card-image'src={fileInputValue} alt='ff' />
            <div className='card-information'>
                <h3 className='card-title'>{nameInputValue}</h3>
                <h4 className='card-location'>{locationValue}</h4>
                <p className='card-square'>{squareInputValue}</p>
                <p className='card-price'>{priceInputValue}</p>
                <p className='card-rent-sell'>{switcherValue ? 'sell' : 'rent'}</p>
                <p className='card-date'>{dateInputValue}</p>
            </div>
        </div>
    )
}
export default Card;