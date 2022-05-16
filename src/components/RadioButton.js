import React from 'react';
import {useFormContext} from "react-hook-form";

function RadioButton({className, typeName, registerName, radioButtons}) {

    const {
        register,
        formState: {errors},
    } = useFormContext();

    return(
        <>
            <div className = {className}>
                {radioButtons.map(({name, labelName}) =>
                    <>
                        <input type={typeName} {...register(registerName)} value={name}/>
                        <label>{labelName}</label>
                    </>
                )}
            </div>
        </>
    )
}

export default RadioButton;