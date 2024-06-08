import { useEffect, useState } from "react";
import { API_KEY } from "@env";
const useMovie = (countryCode) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const url =
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=" +
          countryCode;
        // "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=KR";
        const headers = {
          accept: "application/json",
          Authorization: "Bearer " + API_KEY,
        };
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieList(data.results);
      } catch (error) {
        console.error("Error fetching Movie List info:", error);
      }
    };

    if (countryCode) {
      fetchMovieList();
    }
  }, [countryCode]);
  return movieList;
};

export default useMovie;
