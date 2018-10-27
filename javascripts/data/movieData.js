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

export { loadMovies };