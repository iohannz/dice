import './App.css';
import './components/Die/Die.css'
import Die from './components/Die/Die.jsx';
import dice from './dice';
import Button from './components/Button/Button.jsx';
import { useState } from 'react';
import Form from './components/Form/Form';

function App() {

  const [diceList, setDiceList] = useState(
    [
    <Die source = {getRandomDie(getRandomArbitrary(1,7))} />,
    <Die source = {getRandomDie(getRandomArbitrary(1,7))} />,
    <Die source = {getRandomDie(getRandomArbitrary(1,7))} />,
    <Die source = {getRandomDie(getRandomArbitrary(1,7))} />,
    <Die source = {getRandomDie(getRandomArbitrary(1,7))} />,
    ]
  );

  const onAddBtnClick = event => {
    setDiceList(diceList.splice(0,diceList.length - 1));
  };

  const onRollBtnClick = event => {
    let newDiceList = []

    for (let i = 0; i < diceList.length; i += 1) {
      newDiceList.push(<Die source = {getRandomDie(getRandomArbitrary(1,7))}/>)
    }
    setDiceList(newDiceList)
  }
  
  return (
    <div className="App">
      <div className='dice__container'>
        {diceList}
        {/* <Die source = {die1}></Die>  
        <Die source = {die2}></Die>  
        <Die source = {die3}></Die>  
        <Die source = {die4}></Die>  
        <Die source = {die5}></Die>   */}
      </div>
      <Button handler = {onRollBtnClick} description = {"Roll the Dice!"}></Button>
      <Form handler = {onAddBtnClick}></Form>
    </div>
  );
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomDie(number) {
  return dice[number]
}

export default App;
