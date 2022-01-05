import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "Rs. 220",
      id: 23124,
    },
    {
      name: "Game of Thrones",
      price: "Rs. 2480",
      id: 256617,
    },
    {
      name: "Inception",
      price: "Rs. 564",
      id: 23542,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
