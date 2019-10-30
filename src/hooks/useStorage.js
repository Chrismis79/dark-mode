import {useState} from 'react';

const useStorage = (key, initialValue) => {
    if(typeof key !== 'string'){
        throw new Error(
            'Invalid Params: Local Storage should receive a string'
        );
    }

    const [storedvalue, setStoredValue] = useState(() => {
        if(localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key));
        }else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedvalue, setValue];
}

export default useStorage;