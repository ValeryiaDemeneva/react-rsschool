import React from "react";
import './NameInput.css';

interface INameInputProps {
    onSetStateNameInput: (value: string) => void,
    nameInputValue: string,
}

const NameInput = ({ onSetStateNameInput, nameInputValue}: INameInputProps) => {
    return (
        <div>
            <label>
                <h5 className='name-input-title'>Name:</h5>
                <input type="text" name="name" className='name-input' onChange={(e) => onSetStateNameInput(e.target.value)} value={nameInputValue}/>
            </label>
        </div>
    )

};

export default NameInput;