import { useState } from 'react';

function useList(initialValue = []) {
    const [ value, setValue ] = useState(initialValue);

    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    }

    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    }

    const isEmpty = () => value.length === 0;

    const clear = () => setValue([]);
    
    const order = () => {
        setValue([...value].sort());
    }

    const reverseOrder = () => {
        setValue([...value].reverse());
    }


    return { value, setValue, push, remove, isEmpty, clear, order, reverseOrder };
}

export default useList
