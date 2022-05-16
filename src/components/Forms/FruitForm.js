import Counter from "../Counter";
import React, {useState} from "react";

function FruitForm(){
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
    return(
        <>
            <div className = 'form'>
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
        </>
    )
}
export default FruitForm;