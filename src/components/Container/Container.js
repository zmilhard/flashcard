import React from 'react';

import FlashCard from '../Flashcard/FlashCard';
import NewCode from '../NewCode/NewCode';

function Container({ lastThree, setLastThree }) {

  const [code, setCode] = React.useState("code");
  const [definition, setDefinition] = React.useState("definition");

  

  function randomNumber(max) {
    return Math.floor(Math.random() * max)
  }

  function pickNewFlashCard() {
    //setCode("newCode")
    setDefinition("newDefinition")

    //somehow have length of the json file
    const hardcodedLength = 7
    var nextNumber = randomNumber(hardcodedLength)
    while (lastThree.includes(nextNumber)) {
      nextNumber = randomNumber(hardcodedLength)
    }
    setCode(nextNumber)
    var updatedLastThree = lastThree.toSpliced(0, 1)
    updatedLastThree.push(nextNumber)
    console.log(updatedLastThree)
    setLastThree(updatedLastThree)
  }

  return (
    <>
      <FlashCard code={code} definition={definition} />
      <NewCode func={pickNewFlashCard} />
    </>
  )
}

export default Container;