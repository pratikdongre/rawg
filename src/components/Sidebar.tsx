import React, { useEffect, useState } from "react";

import useGenre from "./hooks/useGenre";
import type { genres } from "./hooks/useGenre";

interface Props {
  selectedGenre: genres | null;
  onSelectedGenre: (genre: genres) => void;
}

const Sidebar = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { genres, error } = useGenre();
  return (
    <div>
      <p className="text-2xl font-bold">Genres</p>
      {error && <p>{error}</p>}
      {genres.map((genre) => (
        <div className="d-flex gap-2 cursor-pointer " key={genre.id}>
          <div className="w-8 h-8">
            <img
              src={genre.image_background}
              className="w-7 h-7 rounded-2xl hover:w-8 hover:h-8 "
            ></img>
          </div>
          <button
            className={
              genre.id === selectedGenre?.id ? "font-medium" : "font-light"
            }
            onClick={() => onSelectedGenre(genre)}
          >
            <p className="underline whitespace-nowrap hover:text-blue-200">
              {genre.name}
            </p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
