import { loadMovies, getMoviesFromLocationArray } from '../data/movieData.js';
import { matchUpLocations } from '../data/locationsData.js';
import { locationBuilder } from './locationComponent.js';


const bindEvents = () => {
    $('#moviePage').on('click', '.movieCard', (e) => {
        const clickedMovieId = $(e.target).closest('.movieCard').attr('id');
        $('#moviePage').hide(); //so can hide everything you would like to on the page besides just the movie div
        $('#buttonDiv').hide();
        loadMoviesSomethingDifferent(clickedMovieId);
        // console.log(clickedMovieId);
    })
}


const movieBuilder = (arrayOfMovies) => {
    let stringBuilder = '';
    arrayOfMovies.forEach((movie) => {
        stringBuilder += `
        <div id="${movie.id}" class="card movieCard">
            <img class="card-img-top" src="${movie.image}" alt="Card image cap">
                 <div class="card-body">
                    <h5 class="card-title">${movie.name}</h5>
                    <p class="card-text">Genre: ${movie.genre}</p>
                    <p class="card-text">Estimated Release Date: ${movie.estimatedRelease}</p>
                   <p class="card-text">Description: ${movie.description}</p>
 
                 </div>
         </div>`;
    });
$('#movieSpace').append(stringBuilder);
};


const initializeMovieBoard = () => {
    loadMovies()
    .then((movies) => {
        movieBuilder(movies)
        bindEvents();
    }).catch((error) => {
        console.error("initializeMovieBoard error", error);
    })
}

const loadMoviesSomethingDifferent = (movieId) => {
    getMoviesFromLocationArray(movieId)
    .then((movieLocationsArray) => {
        return matchUpLocations(movieLocationsArray);
    })
    .then((moviesAndTheirLocations) => {//just throw in another parameter
        locationBuilder(moviesAndTheirLocations);
    })
    // .catch((error) => {
    //     console.error('error on LoadMoviesSomething', error);
    // })
}



export { movieBuilder, initializeMovieBoard };