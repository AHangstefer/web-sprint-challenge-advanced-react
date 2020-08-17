// write your custom hook here to control your checkout form
import {useLocalStorage} from "../hooks/useLocalStorage";
import React, {useState} from "react";

const useForm = (initialValue, cb) => {
    const [value, setValue] = useLocalStorage (false, initialValue);
    const [showSuccessMessage, setShowSuccessMessage]= useState(false);


    const handleChanges = (e) =>{
        console.log("this is handleChange", e.target.name, e.target.value);
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShowSuccessMessage(true);
        console.log( "handleSubmit is working!")
    };

    const clearForm = (e) => {
        e.preventDefault();
        setValue(initialValue);
    };

    // const ShowSuccessMessage = (e) =>{
    //     console.log("showSuccessMessage", e.target.name, e.target.value);
    //     setShowSuccessMessage({
    //         ...showSuccessMessage,
    //         [e.target.name]: e.target.value
    //     });

    // };



    

    return [value, handleSubmit, handleChanges, clearForm, showSuccessMessage, setShowSuccessMessage];

}

export default useForm;