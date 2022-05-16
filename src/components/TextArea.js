import React from 'react';
import {useFormContext} from "react-hook-form";


function TextArea({className, labelName, numberOfRows, numberOfColumns, registerName}){

    const {
        register,
    } = useFormContext();

      return(
        <div className={className}>
            <label> {labelName} </label>
            <textarea

                {...register(registerName)}
            />
        </div>
    )};

export default TextArea;