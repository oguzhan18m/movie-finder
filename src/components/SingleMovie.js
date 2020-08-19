import React, { useEffect, useState } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/main.css";

export default function SingleMovie(props) {
   console.log(props);
   const [singleMovie, setSingleMovie] = useState({});

   useEffect(() => {
      let imdbID = props.match.params.imdbID;
      setSingleMovie({});

      fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=88983421`)
         .then((resp) => resp.json())
         .then((resp) => {
            console.log(resp);
            setSingleMovie(resp);
         })
         .catch(({ message }) => {
            console.log(message);
         });
   }, []);

   console.log(singleMovie);

   return (
      <Card className="single-card">
         <div className="container-fluid details mx-auto">
            <div className="header col s12  mx-auto">
               <Card.Title className="ml-3">
                  <h1>Movie Details</h1>
               </Card.Title>
            </div>
            <div className="row col s12 mx-auto">
               <div className="left col s4 mx-auto">
                  <img
                     className="mx-auto movie-poster-single"
                     src={singleMovie.Poster}
                     alt="poster"
                  />
               </div>
               <div className="right col s8 ">
                  <Card.Title className=" details-title">
                     {singleMovie.Title}
                  </Card.Title>
                  <Card.Subtitle className="text-subtitle">
                     <h6>
                        {" "}
                        <span className="bolder">Director :</span>{" "}
                        {singleMovie.Director}
                     </h6>
                  </Card.Subtitle>

                  <Card.Subtitle className="text-subtitle">
                     <h6>
                        <span className="bolder">Actors :</span>{" "}
                        {singleMovie.Actors}
                     </h6>
                  </Card.Subtitle>
                  <Card.Subtitle className="text-subtitle">
                     <h6>
                        <span className="bolder"> Writers :</span>{" "}
                        {singleMovie.Writer}
                     </h6>
                  </Card.Subtitle>
                  <Card.Subtitle className="text-subtitle">
                     <h6>
                        <span className="bolder">Awards :</span>{" "}
                        {singleMovie.Awards}
                     </h6>
                  </Card.Subtitle>
                  <Card.Subtitle className="text-subtitle">
                     <h6>
                        <span className="bolder">Genre :</span>{" "}
                        {singleMovie.Genre}
                     </h6>
                  </Card.Subtitle>
                  <Card.Subtitle className="text-subtitle">
                     <h6>
                        <span className="bolder">Producer :</span>{" "}
                        {singleMovie.Production}
                     </h6>
                  </Card.Subtitle>
                  <Card.Subtitle className="text-subtitle">
                     <h6>
                        <span className="bolder">Release Date :</span>{" "}
                        {singleMovie.Released}
                     </h6>
                  </Card.Subtitle>
                  <Badge variant="secondary" className="badge">
                     {singleMovie.Runtime} - {singleMovie.Type}
                  </Badge>
                  <Badge variant="secondary" className="badge">
                     {singleMovie.Language} - {singleMovie.Year}
                  </Badge>
                  <Badge variant="secondary" className="badge">
                     IMDB Rating: {singleMovie.imdbRating} - IMDB Total Votes:
                     {singleMovie.imdbVotes}
                  </Badge>

                  <Card.Text className="mt-3">
                     <span className="text-subtitle font-weight-light">
                        <span className="bolder">Plot :</span>{" "}
                        {singleMovie.Plot}
                     </span>
                  </Card.Text>

                  <a href={`https://www.imdb.com/title/${singleMovie.imdbID}/`}>
                     <Button className="mr-3" variant="warning">
                        {" "}
                        View on IMDB
                     </Button>
                  </a>

                  <Link to="/">
                     <Button variant="primary"> Go Back To Search</Button>
                  </Link>
               </div>
            </div>
         </div>
      </Card>
   );
}
