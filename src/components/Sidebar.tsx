import React, { useEffect, useState } from "react";
import apiClient from "./services/apiClient";

interface genres {
  id: number;
  name: string;
  image_background: string;
}

const Sidebar = () => {
  const [genres, setGenres] = useState<genres[]>([]);

  useEffect(() => {
    apiClient.get("/genres").then((res) => {
      console.log(res.data.results);
      setGenres(res.data.results);
    });
  }, []);

  return (
    <div>
      <p className="text-2xl font-bold">Genres</p>
      {genres.map((genre) => (
        <div className="d-flex gap-2 cursor-pointer">
          <div className="w-8 h-8">
            <img
              src={genre.image_background}
              className="w-7 h-7 rounded-2xl hover:w-8 hover:h-8 "
            ></img>
          </div>
          <p className="underline hover:text-blue-200">{genre.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
