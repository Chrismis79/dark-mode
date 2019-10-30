import {useEffect} from 'react';
import useStorage from './useStorage';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useStorage('mode', initialValue);

    useEffect(() => {
        const body = document.querySelector('body');
        if(darkMode === true){
            body.classList.add('dark-mode')
        }else {
            body.classList.remove('dark-mode')
        }
    }, [darkMode])

    const handleChanges = e => {
        setDarkMode(e.target.value);
    };

    return [darkMode, setDarkMode, handleChanges];
};

export default useDarkMode;