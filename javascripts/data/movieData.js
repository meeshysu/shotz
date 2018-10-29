
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

export { loadMovies, getMoviesFromLocationArray };

