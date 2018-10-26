import { locationBuilder } from "../components/locationComponent.js";

const locationData = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done((data) => {
                locationBuilder(data.locations)
            })
            .fail((error) => {
                console.error(error);
            });
    }
    )
};


const initializeLocationBoard = () => {
    locationData().then((locations) => {
        //need to return the second promise here
        return locationBuilder(locations);
    }).catch((error) => {
        console.error(error);
    })
};


// const loadMoviesOnBoards = (movies) => {
//     return new Promise ((resolve, reject) => {
//         $.get('../db/movie.json')
//         .done((data) => {
//             const boardsWithMovies
//         })
//     })
// };



export { locationData, initializeLocationBoard };