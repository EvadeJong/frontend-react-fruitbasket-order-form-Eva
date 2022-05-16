import React from 'react';
import './App.css';
import './components/FormStyles.css';

import SubmitForm from "./components/Forms/SubmitForm";
import FruitForm from "./components/Forms/FruitForm";

function App() {

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>

            <FruitForm/>
            <SubmitForm/>

    </>
  );
}

export default App;
