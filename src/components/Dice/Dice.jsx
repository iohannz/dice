import React from 'react';
import Button from '../Button/Button';
import './Dice.css'

const Dice = (props) => {
    function refreshPage(){ 
        window.location.reload(); 
    }

    if (props.length === 0) {
        return (
            <div className='lost__container'>
                <h1 className='lost__header'>Вы выбыли</h1>
                <p className='lost__under'>Начать заново?</p>
                <Button handler = {refreshPage} description = "Да"></Button>
            </div>
        )
    } else {
        return (
            props.dice
        )
    }

}

export default Dice;