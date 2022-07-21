import React from 'react';
import './Counter.css';
import Button from '../Button/Button';
import { useState } from 'react';


const Counter = () => {

    const [count, setCount] = useState(0);
    function minus () {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    function plus () {
        setCount(count + 1)
    }
    return (
        <div className='counter'>
            <div className='btn__container'>
                <Button handler={minus} description="-"></Button>
            </div>
            <div className='count__container'>
                <p className='count'>{count}</p>
            </div>
            <div className='btn__container'>
                <Button handler={plus} description="+"></Button>
            </div>
        </div>
    )
}

export default Counter;