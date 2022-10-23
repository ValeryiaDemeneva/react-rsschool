import React from "react";
import './modalApiCard.css';
import { ICard } from '../../ReactApi';

const ModalApiCard = ({ character, cardIndex, showPopup, setShowPop }: any): JSX.Element => {
     const closePopup = (event: any) => {
        console.log(event.target.classList)
        if (event.target.classList[0] === 'modal-card-api-conteiner') {
            setShowPop(false)
        }
    }


    character = character && character.filter((item: ICard) => item.id === cardIndex)

    return (

        <div className={showPopup ? 'modal-card-api-conteiner' : 'modal-card-api-conteiner hidden'} onClick={(e) => closePopup(e)}>
            {
                showPopup &&

                <div className="card-container-api">
                    <img src={character[0].image} alt='image    ' />
                    <div className='modal-card-information'>
                        <h3 className='card-api-name'>{character[0].name}</h3>
                        <p className='card-api-status'>Status: {character[0].status}</p>
                        <p className='card-api-gender'>Gender: {character[0].gender}</p>
                        <p className='card-api-origin'>Origin: {character[0].origin.name}</p>
                        <p className='card-api-location'>Location: {character[0].location.name}</p>
                        <p className='card-api-created'>Created: {character[0].created}</p>
                        <p className='card-api-episode'>Episode: {character[0].episode[0]}</p>
                    </div>

                </div>
            }
        </div>

    )
}

export default ModalApiCard;


