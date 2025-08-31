import { useState } from "react";

const useCocktailData = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | unknown>();

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data: T = await response.json();

      setData(data);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data: data,
    error,
    isLoading,
    fetchData,
  };
};

export default useCocktailData;
