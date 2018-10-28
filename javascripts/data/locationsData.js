// import {locationBuilder} from '../components/locationComponent.js';

const loadLocationsForMovies = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done((data) => {
                // console.log(data.locations)
                resolve(data.locations);
            })
            .fail((error) => {
                reject('error on loadLocationsForMovies', error);
            })
    })
};

let randomAssArrayForLocations = []

const matchUpLocations = (movieLocationArray) => {
    let  randomAssArrayForLocations = []
    // console.log(doesntMatterLocationAray)
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done((data) => {
                // console.log(data)
                movieLocationArray.forEach((forEachId) => {
                    data.locations.forEach((locationObject) => {
                        if (location.id === forEachId) {
                            // console.log(forEachId)
                            randomAssArrayForLocations.push(locationObject)
                            console.log(randomAssArrayForLocations)
                        }
                    })
                })
                resolve(randomAssArrayForLocations)
            })
            .fail((error) => {
                reject('error on matchUpLocations', error);
            })
    })
}

//loop thru each id of array and also loop thru locations. 
//if the location.id equals the single forEachId


export { loadLocationsForMovies, matchUpLocations };