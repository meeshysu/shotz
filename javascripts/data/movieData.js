import { movieBuilder } from "../components/movieComponent.js"

const loadMovies = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
            .done((data) => {
                resolve(data.movies)
            })
            .fail((error) => {
                reject('error on loadMovies', error);
            });
    }
    )
};

const getMoviesFromLocationArray = (movieId) => {
    let movieLocationsYeah = '';
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
        .done((data) => {
            data.movies.forEach((movie) => {
                if(movieId === movie.id) {
                    movieLocationsYeah = movie.locations;
                    console.log(movieLocationsYeah)
                }
            })
            resolve(movieLocationsYeah);
        })
        .fail((error) => {
            reject('error on getMoviesFromLocationArray', error);
        })
    })
}
//all of this shit is literally just getting your array of location ids for the movies. so if movieId is equal to the actual id of the movie then just goes to movie.locations. .locations returns that string/array whatever. that thing. 
export { loadMovies, getMoviesFromLocationArray };