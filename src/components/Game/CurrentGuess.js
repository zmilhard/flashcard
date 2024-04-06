import React from 'react';


function CurrentGuess({setAllGuesses}) {
    const [guess, setGuess] = React.useState('');

    function submit(e) {
        e.preventDefault();
        console.log(guess);
        setAllGuesses(guess);
        setGuess('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={(e) => submit(e)}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" pattern="[A-Z]{5}" value={guess} onChange={(e) => setGuess(e.target.value.toUpperCase())} />
        </form>
    )
}

export default CurrentGuess;