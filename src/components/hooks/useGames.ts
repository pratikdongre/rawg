import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setIsLoading(false);

        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setIsLoading(false);

        if (err instanceof CanceledError) return;

        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error, isLoading };
};

export default useGames;
