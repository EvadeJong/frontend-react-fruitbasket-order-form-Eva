import React from 'react';
import {useFormContext} from "react-hook-form";

function Input({className, labelName, type, registerName, htmlFor, checkboxLabelText}){
    const {
        register,
        formState: {errors},
    } = useFormContext();

    return(
    <div className ={className}>
        <label> {labelName} </label>
        <input
            type= {type}
            {...register(registerName)} />
        <label htmlFor={htmlFor}>
            {checkboxLabelText}
        </label>
    </div>
    )
};

export default Input;