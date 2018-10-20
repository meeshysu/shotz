import { movieBuilder } from "../components/movieComponent.js"

const movieData = () => {
$.get('../db/movie.json')
    .done((data) => {
        movieBuilder(data.movie)
    })
    .fail((error) => {
        console.error(error);
    });
}

export { movieData };