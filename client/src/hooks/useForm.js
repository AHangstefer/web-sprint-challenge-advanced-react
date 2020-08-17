// write your custom hook here to control your checkout form
import {useLocalStorage} from "../hooks/useLocalStorage";
import React, {useState} from "react";

const useForm = (initialValue, cb) => {
    const [value, setValue] = useLocalStorage (false, initialValue);
    //const [setShowSuccessMessage, setShowSuccessMessage]= useState(false);


    const handleChanges = (e) =>{
        console.log("this is handleChange", e.target.name, e.target.value);
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        //setShowSuccessMessage(true);
        console.log( "handleSubmit is working!")
    };

    const clearForm = (e) => {
        e.preventDefault();
        setValue(initialValue);
    };

    

    return [value, handleSubmit, handleChanges, clearForm];

}

export default useForm;