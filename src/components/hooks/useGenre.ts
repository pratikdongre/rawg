import { useEffect, useState } from "react";

import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
export interface genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const [genres, setGenres] = useState<genres[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/genres", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data.results);
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error };
};

export default useGenre;
