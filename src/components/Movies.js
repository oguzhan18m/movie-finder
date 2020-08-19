import React from "react";
import "../css/main.css";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Movies({ movie }) {
   return (
      <Card className="col s12 movies-card">
         <div className="container-fluid movies">
            <div className="row col s12 mx-auto">
               <div className="col s4 mx-auto">
                  <img
                     className="mx-auto movie-poster"
                     src={movie.Poster}
                     alt="poster"
                  />
               </div>
               <div className="col s8 mx-auto movie-title">
                  <Link to={`/${movie.imdbID}`}>
                     <Card.Title className="mt-3 movie-title-link">
                        {movie.Title}
                     </Card.Title>
                  </Link>
                  <Card.Subtitle className="movie-title-year">
                     {movie.Year}
                  </Card.Subtitle>
                  <Badge variant="secondary" className="movie-title-type mr-2">
                     {movie.Type}
                  </Badge>
               </div>
            </div>
         </div>
      </Card>
   );
}
