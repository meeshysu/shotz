import { loadMovies, loadMoviesAndLocations} from '../data/movieData.js';
import { initializeLocationBoard } from '../components/locationComponent.js';

const bindEvents = () => {
    $('#movieSpace').on('click', '.movieCard', (e) => {
        const clickedMovieId = $(e.target).closest('.movieCard').attr('id');
        $('#moviePage').hide();
        $('#locationSpace').show();
        initializeLocationBoard(clickedMovieId);
    })
}


const movieBuilder = (arrayOfMovies) => {
    let stringBuilder = '';
    arrayOfMovies.forEach((movie) => {
        stringBuilder += `
        <div class="card movieCard">
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
        console.error(error);
    })
}



export { movieBuilder, initializeMovieBoard };
