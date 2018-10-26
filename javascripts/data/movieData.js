import { movieBuilder } from "../components/movieComponent.js"

const movieData = () => {
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


export { movieData };