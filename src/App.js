import { useState, useEffect } from "react";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Pagination from "./Pagination";
import Search from "./Search";
import "./App.css";
const API_URL =
  "https://www.breakingbadapi.com/api/characters?limit=10&offset=";
function App() {
  const [characters, setCharacters] = useState([]);
  const [prevCharacters, setPrevCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");


  const handleSearch = (value) => {
    setSearch(value);
  }

  const changePage = (pageNumber) => {
    setPage(pageNumber);
  }

  const searchCharacters = (str) => {
    if(str !== ""){
      const temp = prevCharacters.filter(
        (ch) =>
          ch.name.toLowerCase().includes(str.toLowerCase()) ||
          ch.nickname.toLowerCase().includes(str.toLowerCase()) ||
          ch.portrayed.toLowerCase().includes(str.toLowerCase())
      );
    setCharacters([...temp]);
  }
    else setCharacters(prevCharacters);
  }

  useEffect(() => {
    async function getCharacters() {
      try {
        const response = await fetch(`${API_URL}${page * 10}`);
        const data = await response.json();
        setCharacters(data);
        setPrevCharacters(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCharacters();
  }, [page]);

  return (
    <>
      <Header />
      <Search handleSearch={handleSearch} search={search} searchCharacters={searchCharacters}/>
      <CharacterList characterList={characters} />
      {characters.length === 0 ? null : <Pagination page={page} changePage={changePage}/>}
    </>
  );
}

export default App;
