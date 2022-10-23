import React, { useEffect, useState } from "react";
import CardApi from "./CardApi/CardApi";
import './ReactApi.css';
import SearchApi from "./SearchApi/SearchApi";
import ModalApiCard from './CardApi/modalApiCard/modalApiCard';
export interface ICard {

    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {},
    location: {
        name: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string,

}

const ReactApi = (): JSX.Element => {
    const [character, setCharacter] = useState<ICard[] | []>([]);
    const [showPopup, setShowPop] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);
    const [searchValue, setSearchValue] = useState<string>('');
    const [onUpdateState, setOnUpdateState] = useState(false);
    useEffect(() => {
        const getApi = async () => {
            const result = await fetch('https://rickandmortyapi.com/api/character');
            const data = await result.json();
            const dataResult = data.results
            setCharacter(dataResult)

        }
        getApi()
    }, [])

    useEffect(() => {
        const updateCharacters = async () => {
            const result = await fetch(`https://rickandmortyapi.com/api/character?name=${searchValue}`);
            const data = await result.json();
            const dataResult = data.results
            setCharacter(dataResult)
        }
        updateCharacters()
    }, [onUpdateState ])
    return (
        <div className='react-api-container'>
            <SearchApi
                searchValue={searchValue}
                setSearchValue={setSearchValue} 
                setOnUpdateState={setOnUpdateState}
                onUpdateState={onUpdateState}/>
            <CardApi
                character={character}
                setShowPop={setShowPop}
                setCardIndex={setCardIndex}
            />
            <ModalApiCard
                character={character}
                showPopup={showPopup}
                cardIndex={cardIndex}
                setShowPop={setShowPop}
            />
        </div>
    )
}


export default ReactApi;