import React from "react";
import './LocationSelect.css';

interface ILocationProps {
    onSetStateLocation: (value: string) => void,
    locationValue: string,
}

const LocationSelect = ({ onSetStateLocation, locationValue }: ILocationProps) => {

    return (
        <label>
            <h5 className='location-title'>Location:</h5>
            <select className='location-select' onChange={(e) => onSetStateLocation(e.target.value)} value={locationValue}>
            <option value="not chosen">not chosen</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Katowice">Katowice</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Gdańsk">Gdańsk</option>
                <option value="Katowice">Katowice</option>
                
            </select>
        </label>
    )

}
export default LocationSelect;