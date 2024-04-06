import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import CurrentGuess from './CurrentGuess';
import ListOldGuess from './ListOldGuess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [allGuesses, setAllGuesses] = React.useState(["ZZZZZ"]);

  function updateAllGuesses(newGuess) {
    const updatedGuess = [...allGuesses, newGuess];
    setAllGuesses(updatedGuess);
  }

  return <>
    <ListOldGuess oldGuesses={allGuesses} answer={answer}></ListOldGuess>
    <CurrentGuess setAllGuesses={updateAllGuesses} />
  </>
}

export default Game;
