import Character from "./Character";

const CharacterList = ({characterList}) => {

  return (
    <div className="character-list-container">
      {characterList &&
        characterList.map((character, idx) => (
          <Character key={character.char_id} data={character} />
        ))}
    </div>
  );
};

export default CharacterList;
