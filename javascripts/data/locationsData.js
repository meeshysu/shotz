// const loadLocationsForMovies = () => {
//     return new Promise((resolve, reject) => {
//         $.get('../db/locations.json')
//         .done((data) => {
//             resolve(data.locations);
//         })
//         .fail((error) => {
//             reject(error);
//         })
//     })
// };

locationArray = []

const loadLocationsOnMovieCard = (moviesWithLocations) => {
    locationArray = []
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
        .done((data) => {
            moviesWithLocations = forEach((moviesWithLocation => {
                data.locations.forEach((location) => {
                    if (location.id === moviesWithLocation) {
                        locationArray.push(location)
                    }
                })
            })
            resolve(locationArray)
        })
    })
}     


const loadLocations = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/Locations.json')
        .done(data => {
            resolve(data.locations);
        })
        .fail(error => {
            reject(error);
        })
    });
}


export { loadLocations, loadLocationsForMovies, loadLocationsOnMovieCard };}