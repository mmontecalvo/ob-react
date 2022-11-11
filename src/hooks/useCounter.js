import { useState } from 'react';

function useCounter(initialValue = 0, max = 100, min = 0, step = 1) {
    const [ value, setValue ] = useState(initialValue);

    const increment = () => {
        (value < max && value + step <= max) && setValue(value + step);
    }    

    const decrement = () => {
        (value > min && value - step >= min) && setValue(value - step);
    }

    const reset = () => {
        setValue(initialValue);
    }
    
    return { value, increment, decrement, reset };
}

export default useCounter