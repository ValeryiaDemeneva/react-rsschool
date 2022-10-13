import React from "react";
import './DatePicker.css';

interface IDateInputProps {
    onSetStateDateInput: (value: string) => void,
    dateInputValue: string,
}


const DatePicker = ({ onSetStateDateInput, dateInputValue }: IDateInputProps) => {
    return (
        <div className='date-input-container'>
            <label htmlFor="start" className='date-input-title'>Published:</label>

            <input type="date" id="start" className='date-input' name="trip-start"

                min="2021-01-01" max="2022-12-31" onChange={(e) => onSetStateDateInput(e.target.value)} value={dateInputValue} />
        </div>
    )
};

export default DatePicker;