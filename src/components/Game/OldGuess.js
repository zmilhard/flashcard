import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function OldGuess({ value, answer }) {
    const letterCorrect = checkGuess(value, answer);

    return <p className="guess">
        {range(5).map((idx) => (
            <span className={letterCorrect ? "cell " + letterCorrect[idx].status : "cell"}>{letterCorrect ? letterCorrect[idx].letter : undefined}</span>
        ))}
    </p>


}

export default OldGuess;