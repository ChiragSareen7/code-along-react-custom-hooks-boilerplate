import { useState, useEffect } from 'react';

const Storage = (initial) => {
    const storedInitial = localStorage.getItem('InputValue') || initial;
    const [input, setInput] = useState(storedInitial);
    
    useEffect(() => {
        localStorage.setItem('InputValue', input);
        sessionStorage.setItem('InputValue', input);
    }, [input]);

    return [input, setInput];
};

export default Storage;