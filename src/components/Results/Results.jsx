import React, { Component } from "react";
import "./Results.scss";

// testArray: [
//   {
//     title: "Ocean's Eleven",
//     year: "2001",
//     director: "Steven Soderbergh",
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/6/68/Ocean%27s_Eleven_2001_Poster.jpg",
//   },
//   {
//     title: "Ocean's Twelve",
//     year: "2004",
//     director: "Steven Soderbergh",
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/7/7d/Ocean%27s_Twelve_poster.jpg",
//   },
//   {
//     title: "Ocean's Thirteen",
//     year: "2007",
//     director: "Steven Soderbergh",
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/c/c1/Oceans13Poster1.jpg",
//   },
//   {
//     title: "Ocean's Eleven",
//     year: "2001",
//     director: "Steven Soderbergh",
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/6/68/Ocean%27s_Eleven_2001_Poster.jpg",
//   },
//   {
//     title: "Ocean's Twelve",
//     year: "2004",
//     director: "Steven Soderbergh",
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/7/7d/Ocean%27s_Twelve_poster.jpg",
//   },
//   {
//     title: "Ocean's Thirteen",
//     year: "2007",
//     director: "Steven Soderbergh",
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/c/c1/Oceans13Poster1.jpg",
//   },
// ],


const Results = (props)=> {  
  const shownArray = props.displayedArray
  const imageUrlRoot = 'https://image.tmdb.org/t/p/w500'
    return (
      
      <section className="results__section">
        <h2 className="results__heading">Results</h2>
        {shownArray.map((film) => {
          if (shownArray && shownArray.length > 0){
          //   if (this.state.displayedArray.length > 0)
          return (
            
            <div className="results__item">
              <div className="results__image-container">
                <img className="results__image" src={imageUrlRoot + film.poster_path} alt=""></img>
              </div>
              <div className="results__text-container">
                <h3 className="results__title">{film.title}</h3>
                <p className="results__year">{film.release_date.slice(0,4)}</p>
                <h3 className="results__director">{film.director}</h3>
             <div className="results__overlay">{film.overview}</div>
              </div>
            </div>
          );}
        })}
      </section>

);

  }

export default Results;