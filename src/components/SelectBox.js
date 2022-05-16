import React from 'react';
import {useFormContext} from "react-hook-form";



function SelectBox({className, labelName, selectBoxName, registerName, options}){

    const {
        register,
        formState: {errors},
    } = useFormContext();

    return(
        <>
            <div className ={className}>
                <label> {labelName} </label>
                <select
                    name = {selectBoxName}
                    {...register(registerName)}>

                    {options.map(({ name, label }) => <option name={name} >{label}</option>)}

                </select>
            </div>
        </>
    )};

export default SelectBox;