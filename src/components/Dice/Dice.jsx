import React from 'react';

const Dice = (props) => {
    if (props.length === 0) {
        return (
            <div>
                <h1>Вы выбыли</h1>
            </div>
        )
    } else {
        return (
            props.dice
        )
    }

}

export default Dice;