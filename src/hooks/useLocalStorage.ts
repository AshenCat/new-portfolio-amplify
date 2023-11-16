import { useState } from 'react';

const useLocalStorage = (
    key: string,
    defaultValue: any
): [any, (val: any) => void] => {
    // Create state variable to store
    // localStorage value in state
    const [localStorageValue, setLocalStorageValue] = useState(() => {
        try {
            const value = localStorage.getItem(key);
            // If value is already present in
            // localStorage then return it

            // Else set default value in
            // localStorage and then return it
            if (value) {
                return JSON.parse(value);
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (error) {
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        }
    });

    // this method update our localStorage and our state
    const setLocalStorageStateValue = (value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
        setLocalStorageValue(value);
    };
    return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
