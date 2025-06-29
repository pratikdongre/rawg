import React, { useEffect, useState } from "react";

import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface platform {
  id: number;
  name: string;
}

const usePlatform = () => {
  const [platform, setPlatform] = useState<platform[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/platforms", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data.results);
        setPlatform(res.data.results);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { platform, error };
};

export default usePlatform;
