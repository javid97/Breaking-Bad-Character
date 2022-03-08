import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

const API_URL =
  "https://www.breakingbadapi.com/api/characters?limit=10&offset=0";

export const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function getCharacters() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setCharacters(pre => [...data]);
      } catch (err) {
        console.log(err);
      }
    }
    getCharacters();
  }, []);
  return (
    <DataContext.Provider value={{ characters }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
