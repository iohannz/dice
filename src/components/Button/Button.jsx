import React from 'react';
import { useState } from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div className='container'>
            <button className='btn' onClick={props.handler}>{props.description}</button>
        </div>
    )
}


export default Button;