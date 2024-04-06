import React from 'react';
import OldGuess from './OldGuess';

import { range } from '../../utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function ListOldGuess({ oldGuesses, answer}) {
    // console.log(`oldGuess {oldGuesses}`)
    return <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((idx) => (
            <OldGuess key={idx} value={oldGuesses[idx]} answer={answer}></OldGuess>
        ))}


    </div>

    // {range(0, 6).map((idx) => (
    //     {oldGuesses.map(guess => (
    //         <OldGuess key={guess}>{guess}</OldGuess>
    //     ))}
}

export default ListOldGuess;