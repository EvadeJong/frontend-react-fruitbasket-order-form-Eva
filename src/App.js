import React, { useState } from 'react';
import './App.css';
import './components/FormStyles.css';
import { useForm, FormProvider } from 'react-hook-form';


import Counter from './components/Counter.js';
import SelectBox from './components/SelectBox.js';
import RadioButton from './components/RadioButton.js';
import TextArea from './components/TextArea.js';
import Input from './components/Input.js';

function App() {

  let [aardbeienCounter, setAardbeienCounter] = useState(0);
  let [bananenCounter, setBanenenCounter] = useState(0);
  let [appelsCounter, setAppelsCounter] = useState(0);
  let [kiwiCounter, setKiwiCounter] = useState(0);

  function reset(){
    setAardbeienCounter(aardbeienCounter = 0);
    setBanenenCounter(bananenCounter = 0);
    setAppelsCounter(appelsCounter = 0);
    setKiwiCounter(kiwiCounter = 0);
  }
  //const { register, formState : { errors } } = useForm();
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
      Opmerkingen:${data.opmerkingen},
      Aantal aardbeien:${aardbeienCounter},
      Aantal bananen: ${bananenCounter},
      Aantal appels: ${appelsCounter},
      Aantal kiwi's" ${kiwiCounter}`
      );


  return (
    <>
      <div className = 'form'>
      <h1>Fruitmand bezorgservice</h1>

        <Counter
           fruitName = "🍓 Aardbeien"
           counter = {aardbeienCounter}
           changePlus = {() => setAardbeienCounter(aardbeienCounter +1)}
           changeMin= {() => setAardbeienCounter(aardbeienCounter -1)}
        />
        <Counter
           fruitName = "🍌 Bananen"
           counter = {bananenCounter}
           changePlus = {() => setBanenenCounter(bananenCounter +1)}
           changeMin= {() => setBanenenCounter(bananenCounter -1)}
        />
        <Counter
           fruitName = "🍏 Appels"
           counter = {appelsCounter}
           changePlus = {() => setAppelsCounter(appelsCounter +1)}
           changeMin= {() => setAppelsCounter(appelsCounter -1)}
        />
        <Counter
            fruitName = "🥝 Kiwi's"
            counter = {kiwiCounter}
            changePlus = {() => setKiwiCounter(kiwiCounter +1)}
            changeMin= {() => setKiwiCounter(kiwiCounter -1)}
        />

        <p>
           <button onClick={reset}> Reset </button>
        </p>
</div>
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
    </>
  );
}

export default App;
