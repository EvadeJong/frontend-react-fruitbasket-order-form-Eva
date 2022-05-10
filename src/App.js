import React from 'react';
import './App.css';
import Counter from './components/Counter.js';

function App() {

  let [aardbeienCounter, setAardbeienCounter] = React.useState(0);
  let [bananenCounter, setBanenenCounter] = React.useState(0);
  let [appelsCounter, setAppelsCounter] = React.useState(0);
  let [kiwiCounter, setKiwiCounter] = React.useState(0);

  function reset(){
    setAardbeienCounter(aardbeienCounter = 0);
    setBanenenCounter(bananenCounter = 0);
    setAppelsCounter(appelsCounter = 0);
    setKiwiCounter(kiwiCounter = 0);
  }

  return (
    <>
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
    </>
  );
}

export default App;
