import Character from "./Character";

const CharacterList = ({characterList}) => {

  return (
    <div className="character-list-container">
      {characterList.length === 0 ? <h2>Oops! character not found...</h2> :
        characterList.map((character, idx) => (
          <Character key={character.char_id} data={character} />
        ))}
    </div>
  );
};

export default CharacterList;
