import { locationBuilder } from '../components/locationComponent.js'

const loadLocationsForMovies = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
        .done((data) => {
            locationBuilder(data.locations);
        })
        .fail((error) => {
            reject(error);
        })
    })
};


// const loadLocations = () => {
//     return new Promise((resolve, reject) => {
//         $.get('../db/Locations.json')
//         .done(data => {
//             resolve(data.locations);
//         })
//         .fail(error => {
//             reject(error);
//         })
//     });
// }


export { loadLocationsForMovies };