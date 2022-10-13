import React from "react";
import './SquareInput.css';



interface ISquareInputProps {
    onSetStateSquareInput: (value: string) => void,
    squareInputValue: string;
}

const SquareInput =  ({ onSetStateSquareInput, squareInputValue}: ISquareInputProps) => {
        return (
            <label >
                <h5 className='square-input-title'>Square:</h5>
                <input  type="number" name='square' className='square-input' onChange={(e) => onSetStateSquareInput(e.target.value)} value={squareInputValue}/>
            </label>
        )
    };

export default SquareInput;