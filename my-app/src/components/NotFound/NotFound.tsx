import React from "react";
import './NotFound.css';
import { notFound } from "../../data/index";

const NotFound = (): JSX.Element => {
    return (
        <div className='not-found-container'>
            <img src= {notFound} alt='404'></img>
        </div>
    )
}
export default NotFound;