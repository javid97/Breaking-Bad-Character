import Character from "./Character";

const CharacterList = ({characterList, error}) => {

  return (
    <div className="character-list-container">
      {characterList.length === 0 ? <h2>{error}</h2> :
        characterList.map((character, idx) => (
          <Character key={character.char_id} data={character} />
        ))}
    </div>
  );
};

export default CharacterList;
