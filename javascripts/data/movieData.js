import { movieBuilder } from "../components/movieComponent.js"

const loadMovies = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
            .done((data) => {
                movieBuilder(data.movies)
            })
            .fail((error) => {
                console.error(error);
            });
    }
    )
};

const loadMoviesAndLocations = (movieId) => {
    let moviesWithLocations = '';
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
        .done((data) => {
            data.movies.forEach((movie) => {
                if (movieId === movie.movieId) {
                    moviesWithLocations = movie.location_id;
                }
            })
            resolve(moviesWithLocations);
        })
        .fail((error) => {
            reject('error on loadMoviesAndLocations', error)
        })
    })
}

export { loadMovies, loadMoviesAndLocations };