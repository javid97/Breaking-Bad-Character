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

  const searchCharacters = () => {
    
  }

  useEffect(() => {
    async function getCharacters() {
      try {
        const response = await fetch(`${API_URL}${page}`);
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
      <Search handleSearch={handleSearch} search={search}/>
      <CharacterList characterList={characters} />
      <Pagination changePage={changePage}/>
    </>
  );
}

export default App;
