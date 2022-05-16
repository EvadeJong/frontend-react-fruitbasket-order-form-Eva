import SelectBox from '../SelectBox.js';
import RadioButton from '../RadioButton.js';
import TextArea from '../TextArea.js';
import Input from '../Input.js';

import React, { useState } from 'react';
import '../FormStyles.css';
import { useForm, FormProvider } from 'react-hook-form';

function SubmitForm(){

    const methods = useForm();
    const {handleSubmit} = methods;

    const onSubmit = data => console.log(
        `Bestelgegevens:
      Voornaam: ${data.voornaam}, 
      Achternaam: ${data.achternaam}, 
      Leeftijd: ${data.leeftijd}, 
      Postcode: ${data.postcode},
      Bezorgfrequentie: ${data.bezorgfrequentie},
      Bezorgmoment: ${data.bezorgmoment},
      Opmerkingen:${data.opmerkingen}`
    );

    return(
<FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
            className='form'
            labelName='Voornaam'
            type = 'text'
            registerName = 'voornaam'
        />
        <Input
            className='form'
            labelName='Achternaam'
            type = 'tekst'
            registerName = 'achternaam'
        />
        <Input
            className='form'
            labelName='Leeftijd'
            type = 'number'
            registerName = 'leeftijd'
        />
        <Input
            className='form'
            labelName='postcode'
            type = 'text'
            registerName = 'postcode'
        />
        <SelectBox
            className='form'
            labelName='Bezorgfrequentie:'
            selectBoxName='selectBox'
            registerName='bezorgfrequentie'
            options={[
                {name: 'iedere-week', label: 'Iedere week'},
                {name: 'om-de-week', label: 'Om de week'},
                {name: 'iedere-maand', label: 'Iedere maand'}
            ]}
        />
        <RadioButton
            className='radioButtons'
            typeName='radio'
            registerName = 'bezorgmoment'
            radioButtons={[
                {name: "overdag", labelName: "Overdag"},
                {name: "s-avonds", labelName: "s' Avonds"},
            ]}
        />
        <TextArea
            className = 'form'
            labelName ='opmerkingen'
            registerName ='opmerkingen'
        />
        <div>
            <Input
                className='checkbox'
                type = 'checkbox'
                registerName = 'checkbox'
            />
            <label htmlFor='terms-and-conditions'>
                Ik ga akkoord met de voorwaarden
            </label>
        </div>
        <div className='button'>
            <input type = 'submit' />
        </div>
    </form>
</FormProvider>

    )}

export default SubmitForm;