import React from "react";
import './Checkbox.css';



interface ICheckboxProps {
    checkboxValue: boolean,
    OnSetStateCheckbox: (value: boolean) => void,

}


const Checkbox = ({ checkboxValue, OnSetStateCheckbox }: ICheckboxProps) => {
        return (
            
            <div className='rooms-checkbox'>
            <label>
                <input type="checkbox" 
                checked={checkboxValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => OnSetStateCheckbox(checkboxValue)}
                />
                I agree with the processing of data
            </label>
            
            </div>
        )
    };

export default Checkbox;