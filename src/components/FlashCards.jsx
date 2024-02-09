import React, { useState } from 'react'; 

const Flashcards = () => {
    let color = "text-white bg-dark"
    const [Color1, Color2] = useState(color)

  const [flashcards, setFlashcards] = useState([
    { id: 1, odpowiedz: 'Trener Pawel', tytul: "Wielki Chlop" ,isClicked: false},
    { id: 2, odpowiedz: 'Szczur', tytul: "Beton" ,isClicked: false },
    { id: 3, odpowiedz: 'Bartek', tytul: "Król" ,isClicked: false },
  ]);
 
  const handleClick = (id) => {
    const updatedFlashcards = flashcards.map(flashcard => {
      if (flashcard.id === id) {
        return { ...flashcard, isClicked: !flashcard.isClicked };
      } else {
        return { ...flashcard, isClicked: false };
      }
    });
    setFlashcards(updatedFlashcards);
  };
 
  return (
    <div>

        {flashcards.map(flashcard => (
        <div className={`card mx-auto my-2 flex w-25 text-center ${Color1}`}>
          <div
            key={flashcard.id}
            className={`flashcard ${flashcard.isClicked ? 'clicked' : ''}`}
            onClick={() => handleClick(flashcard.id)}
          >
            {flashcard.isClicked ? (
              <p>{flashcard.odpowiedz}</p>
            ) : (
              <p>{flashcard.tytul}</p>
            )}
          </div>
          </div>
        ))}
      </div>
  );
};
 
export default Flashcards;