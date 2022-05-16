import React from 'react';
import {useFormContext} from "react-hook-form";

function Input({className, labelName, type, registerName}){
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
    </div>
    )
};

export default Input;