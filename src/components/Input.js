import React from 'react';
import {useFormContext} from "react-hook-form";

function Input({className, labelName, type, registerName, validation, htmlFor, checkboxLabelText}){
    const {
        register
    } = useFormContext();

    return(
    <>
        <div className ={className}>
            <label> {labelName} </label>
            <input
                type= {type}
                {...register(registerName, validation)} />
            <label htmlFor={htmlFor}>
                {checkboxLabelText}
            </label>
        </div>
    </>
    )}

export default Input;