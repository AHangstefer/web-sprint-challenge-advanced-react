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

    // const clearForm = (e) => {
    //     e.preventDefault();
    //     setValue(initialValue);
    // };

  
    


    // const ShowSuccessMessage = (e) =>{
    //     e.preventDefault();
    //     setShowSuccessMessage(true);
    //     

    // };



    
   //      [value, setValue,   handleChanges,   handleSubmit]
    return [value, handleSubmit, handleChanges, showSuccessMessage, setShowSuccessMessage];

}

export default useForm;