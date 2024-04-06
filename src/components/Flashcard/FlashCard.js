import React from 'react';


function FlashCard({ code, definition }) {
    const [isDefinition, setIsDefinition] = React.useState(false);
    console.log("isDefinition:", isDefinition)

    var content = isDefinition ? definition : code
    return <button onClick={() => setIsDefinition(prevDefinition => !prevDefinition)}>{content}</button>
}

export default FlashCard;