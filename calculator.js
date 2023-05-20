import React, { useState } from 'react';
import './styles.css';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [operator, setOperator] = useState(null);
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  const handleNumberClick = (number) => {
    if (display === '0' || operator !== null) {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleClick = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const handleOperatorClick = (selectedOperator) => {
    setOperator(selectedOperator);
    setPrevValue(parseFloat(display));
    setDisplay('0');
  };

  const handleEqualClick = () => {
    const currentValue = parseFloat(display);

    if (operator === '+') {
      setDisplay((prevValue + currentValue).toString());
    } else if (operator === '-') {
      setDisplay((prevValue - currentValue).toString());
    } else if (operator === '*') {
      setDisplay((prevValue * currentValue).toString());
    } else if (operator === '/') {
      setDisplay((prevValue / currentValue).toString());
    }

    setPrevValue(null);
    setOperator(null);
  };

  const handleClearClick = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
  };

  return (
    <div className='container'>
        <div className='head-toggle'>
            <div className='header'>
                <Typography variant='h4'>Calculator</Typography>
            </div>
    <div className='switch' >
    <Switch {...label} defaultChecked onClick={handleClick}/>
    </div>
    </div>
    <div className={`calculator ${isSwitchOn ? 'switch-on' : 'switch-off'}`}>
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className="buttons">
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="buttons">
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="buttons">
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleEqualClick()}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleClearClick()}>C</button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
