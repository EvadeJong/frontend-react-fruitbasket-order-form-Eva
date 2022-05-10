import React from 'react';

function Counter({fruitName, counter, changePlus, changeMin}){

    return(
        <div>
            <h2>{fruitName}</h2>

            <button
                type = "button"
                onClick= {changeMin}
                disabled = {counter === 0}
            >
                -
            </button>
            {counter}
            <button
                type = "button"
                onClick={changePlus}
            >
                +
            </button>
        </div>
    )
}

export default Counter;