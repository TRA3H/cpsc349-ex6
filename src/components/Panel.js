import React, { useState } from 'react';
import Display from './Display';
import CalculatorButton from './CalculatorButton';
import { evaluate } from 'mathjs';

const Panel = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleInput = (e) => {
        setInput(input + e.target.name);
    };

    const calculate = () => {
        try {
            setResult(evaluate(input));
        } catch (error) {
            setResult('Error');
        }
    };

    const clear = () => {
        setInput('');
        setResult('');
    };

    return (
        <div className='calculator'>
            <Display input={input} result={result} />
            <div className='calculator-buttons'>
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', 'C', '=', '/'].map((button) => (
                    button === 'C' ? 
                        <CalculatorButton key={button} name={button} onClick={clear} /> :
                        button === '=' ? 
                            <CalculatorButton key={button} name={button} onClick={calculate} /> :
                            <CalculatorButton key={button} name={button} onClick={handleInput} />
                ))}
            </div>
        </div>
    );
};

export default Panel;
