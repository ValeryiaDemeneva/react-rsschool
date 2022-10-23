import React from "react";
import './SearchApi.css';


const SearchApi = ({ searchValue, setSearchValue, setOnUpdateState, onUpdateState }: any): JSX.Element => {

    const onChangeInput = (event: any) => {
        setSearchValue(event.target.value)
    }
    return (
        <div className='search-container'>
            <input
                type="text"
                className="search-bar-api"
                value={searchValue}
                onChange={(e) => onChangeInput(e)}
            />
            <button className='search-button-api' onClick={() => setOnUpdateState(!onUpdateState)}>search</button>
        </div>
    )
}

export default SearchApi;