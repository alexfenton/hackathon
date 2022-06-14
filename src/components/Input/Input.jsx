import React, { Component } from "react";
import axios from "axios";
import "./Input.scss";
import Results from "../Results/Results";

export default class Input extends Component {
  state = {
    currentArray: []
    //       {
    //         title: "Ocean's Eleven",
    //         year: "2001",
    //         director: "Steven Soderbergh",
    //         image:
    //           "https://upload.wikimedia.org/wikipedia/en/6/68/Ocean%27s_Eleven_2001_Poster.jpg",
    //       },
    //       {
    //         title: "Ocean's Twelve",
    //         year: "2004",
    //         director: "Steven Soderbergh",
    //         image:
    //           "https://upload.wikimedia.org/wikipedia/en/7/7d/Ocean%27s_Twelve_poster.jpg",
    //       },
    //       {
    //         title: "Ocean's Thirteen",
    //         year: "2007",
    //         director: "Steven Soderbergh",
    //         image:
    //           "https://upload.wikimedia.org/wikipedia/en/c/c1/Oceans13Poster1.jpg",
    //       },
    //       {
    //         title: "Ocean's Eleven",
    //         year: "2001",
    //         director: "Steven Soderbergh",
    //         image:
    //           "https://upload.wikimedia.org/wikipedia/en/6/68/Ocean%27s_Eleven_2001_Poster.jpg",
    //       },
    //       {
    //         title: "Ocean's Twelve",
    //         year: "2004",
    //         director: "Steven Soderbergh",
    //         image:
    //           "https://upload.wikimedia.org/wikipedia/en/7/7d/Ocean%27s_Twelve_poster.jpg",
    //       },
    //       {
    //         title: "Ocean's Thirteen",
    //         year: "2007",
    //         director: "Steven Soderbergh",
    //         image:
    //           "https://upload.wikimedia.org/wikipedia/en/c/c1/Oceans13Poster1.jpg",
    //       },
    //     ]
  };


  api_key = "18f724ea944a72644e4b26d5676ced32"

  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
     const actor1 = {
      forename: event.target.actor1__forename.value,
      surname: event.target.actor1__surname.value,
    };
     const actor2 = {
      forename: event.target.actor2__forename.value,
      surname: event.target.actor2__surname.value,
    };
    console.log(actor1, actor2);
    this.getData(actor1, actor2)
  };
  
  getData = async(actor1, actor2)=>{
      
      const idResponse1 = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${this.api_key}&language=en-US&query=${actor1.forename}%20${actor1.surname}&page=1&include_adult=false`)
      const actorOneID = idResponse1.data.results[0].id
      console.log(actorOneID)
      
      const idResponse2 = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${this.api_key}&language=en-US&query=${actor2.forename}%20${actor2.surname}&page=1&include_adult=false`)
      const actorTwoID = (idResponse2.data.results[0].id)
      console.log(actorTwoID)
  
      const filmResponse1 = await axios.get(`https://api.themoviedb.org/3/person/${actorOneID}/movie_credits?api_key=18f724ea944a72644e4b26d5676ced32&language=en-US`)
      const actorOneFilms = (filmResponse1.data.cast)
      console.log(actorOneFilms)
  
      const filmResponse2 = await axios.get(`https://api.themoviedb.org/3/person/${actorTwoID}/movie_credits?api_key=18f724ea944a72644e4b26d5676ced32&language=en-US`)
      const actorTwoFilms = (filmResponse2.data.cast)
      console.log(actorTwoFilms)

      const combinedArray = actorOneFilms.concat(actorTwoFilms);

      const sharedArray = this.findDuplicates(combinedArray);

      this.setState({currentArray : sharedArray})
  }
  
  findDuplicates = (arr) => {
    let sorted_arr = arr.sort(function(a, b) { 
        return a.id - b.id;
      });

    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1].id === sorted_arr[i].id) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }


  render() {
    return (
        <div className="main">
        <section className="input__section">
            <h1 className="input__heading">Met <span style={{color:'red'}} >on</span> Set</h1>
      <form className="input__form"onSubmit={this.handleSubmit}>
        <label htmlFor="actor1__forename">First Name</label>
        <input
          id="actor1__forename"
          name="actor1__forename"
          className="input__box"
          type="text"
          placeholder="First Name"
        ></input>
        <label htmlFor="actor1__surname">Last Name</label>
        <input
          id="actor1__surname"
          name="actor1__surname"
          className="input__box"
          type="text"
          placeholder="Last Name"
        ></input>
        <label htmlFor="actor2__forename">First Name</label>
        <input
          id="actor2__forename"
          name="actor2__forename"
          className="input__box"
          type="text"
          placeholder="First Name"
        ></input>
        <label htmlFor="actor2__surname">Last Name</label>
        <input
          id="actor2__surname"
          name="actor2__surname"
          className="input__box"
          type="text"
          placeholder="Last Name"
        ></input>
        <button type="submit" className="input__button">
          Search
        </button>
      </form>
      </section>
      <Results displayedArray = {this.state.currentArray}/>
      </div>
);

}


};

