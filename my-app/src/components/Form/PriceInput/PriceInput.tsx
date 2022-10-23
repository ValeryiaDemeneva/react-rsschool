import React from "react";
import './PriceInput.css';


interface IPriceInputProps {
    onSetStatePriceInput: (value: string) => void,
    priceInputValue: string,
}

const PriceInput = ({ onSetStatePriceInput, priceInputValue}: IPriceInputProps) => {


    return (
        <label>
            <h5 className='price-input-title'>Price:</h5>
            <input type="number" name="price" className='price-input' onChange={(e) => onSetStatePriceInput(e.target.value)}  value={priceInputValue}/>
        </label>
    )
};

export default PriceInput;