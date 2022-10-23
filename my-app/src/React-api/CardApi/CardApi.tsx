import React from "react";
import './CardApi.css';
import { ICard } from '../ReactApi';


const CardApi = ({
    character,
    setShowPop,
    setCardIndex
}: any): JSX.Element => {

    const onShowPopup = (id: number) => {
        setShowPop(true)
        setCardIndex(id)
    }
    return (
        <div className='cards-api-container'>
            {
                character && character.length ?
                    character.map((item: ICard) => {
                        return (
                            <div className='card-api-conteiner' onClick={() => onShowPopup(item.id)}>
                                <img src={item.image} />
                                <div className='card-information'>
                                    <h3 className='card-api-name'>{item.name}</h3>
                                    <p className='card-api-gender'>{item.gender}</p>
                                    <p className='card-api-location'>{item.location.name}</p>
                                </div>
                            </div>
                        )
                    })
                    : <div>EMPTY</div>
            }
        </div>
    )
}

export default CardApi;



