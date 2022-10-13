import React from "react";
import './Switcher.css';

interface ISwitcherProps {
    switcherValue: boolean,
    OnSetStateSwicher: (value: boolean) => void,

}


const Switcher = ({ switcherValue, OnSetStateSwicher }: ISwitcherProps) => {
    return (
        <div className='switcher-container'>
            <input
                checked={switcherValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => OnSetStateSwicher(switcherValue)}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label

                className={switcherValue ? ' onColor react-switch-label' : 'react-switch-label'}
                htmlFor={`react-switch-new`}
            >

                <span className={`react-switch-button`} />

            </label>
            <p className="switcher-text">
                Rent / Sell</p>
        </div>
    );
};


export default Switcher;