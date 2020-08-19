import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Movies from "./Movies";
import SearchForm from "../components/SearchForm";
import MoviesPagination from "../components/MoviesPagination";
import moment from "moment";
import movieFinderLogo from "./movie-finder-logo.png";

function Home() {
   const [movies, setMovies] = useState([]);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const [q, setQuery] = useState("pokemon");
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);

   const API_KEY = "88983421";

   const searchHandler = (e) => {
      e.preventDefault();
      setQuery(e.target.value);
   };

   const nextPage = (pageNumber) => {
      fetch(
         `http://www.omdbapi.com/?apikey=${API_KEY}&s=${q}&page=${pageNumber}`
      )
         .then((resp) => resp.json())
         .then((resp) => {
            if (resp.Response === "False") {
               setError(resp.Error);
            } else {
               setMovies(resp.Search);
               setPage(pageNumber);
            }
            setLoading(false);
         })
         .catch(({ message }) => {
            setError(message);
            setLoading(false);
         });
   };

   useEffect(() => {
      setLoading(true);
      setError(null);
      setMovies([]);

      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${q}`)
         .then((resp) => resp.json())
         .then((resp) => {
            console.log(resp);

            if (resp.Response === "False") {
               setError(resp.Error);
            } else {
               setMovies(resp.Search);
               setTotalResults(resp.totalResults);
            }
            setLoading(false);
         })
         .catch(({ message }) => {
            setError(message);
            setLoading(false);
         });
   }, [q]);

   const numberPages = Math.floor(totalResults / 20);

   return (
      <Container>
         <img src={movieFinderLogo} alt="movie-finder-logo" />
         <SearchForm searchHandler={searchHandler} />
         {totalResults > 20 ? (
            <MoviesPagination
               pages={numberPages}
               page={page}
               nextPage={nextPage}
            />
         ) : (
            ""
         )}

         {loading && <h1>Loading...</h1>}
         {movies
            .sort(
               (a, b) =>
                  moment(b.Year).format("YYYY") - moment(a.Year).format("YYYY")
            )
            .map((movie, i) => {
               return <Movies key={i} movie={movie} />;
            })}
         {totalResults > 20 ? (
            <MoviesPagination
               pages={numberPages}
               page={page}
               nextPage={nextPage}
            />
         ) : (
            ""
         )}
      </Container>
   );
}

export default Home;
