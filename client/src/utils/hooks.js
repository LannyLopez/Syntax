import { useState } from 'react';

export const useForm = (callback, initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const testChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    };

    const submitHandler = event => {
        event.preventDefault();
        callback();
    }

    return {
        testChange,
        submitHandler,
        values
    };
};