import { createContext, useContext, useState } from "react";

// Cria o contexto
const LibraryContext = createContext();

// Hook personalizado para usar o contexto
export const useLibrary = () => useContext(LibraryContext);

// Provider que envolve a aplicação
export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);

  const addToLibrary = (music) => {
    if (library.length >= 5) {
      alert("Limite de 5 músicas atingido!");
      return;
    }

    const exists = library.some((item) => item.id === music.id);
    if (!exists) {
      setLibrary((prev) => [...prev, music]);
    }
  };

  const removeFromLibrary = (musicId)=> {
    setLibrary((prev) => prev.filter((music) => music.id !== musicId))
  }

  return (
    <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
