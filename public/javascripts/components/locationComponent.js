import { loadLocationsForMovies } from '../data/locationsData.js';



const locationBuilder = (arrayOfLocations) => {
    let stringBuilder = '';
    arrayOfLocations.forEach((location) => {
      stringBuilder += 
        `<div id="locationsOfMovie" class="card locationsOf ${location.shootTime}">
            <img class="card-img-top" src="${location.image}" alt="Card image cap">
                <div class="card-body">
                     <h5 class="card-title">${location.name}</h5>
                     <p class="card-text">Location: ${location.location}</p>
                     <p class="card-text">Movies: ${location.moviesUsed}</p>
                </div>
                <div class="card-body shootTime">
                    <p class="card-text">Shoot Time: ${location.shootTime}</p>
            </div>
        </div>`;
    });
 $('#locationSpace').append(stringBuilder); 
};



const initializeLocationBoard = () => {
    loadLocationsForMovies()  
    .then((locations) => {
        locationBuilder(locations);
    }).catch((error) => {
        console.error(error);
    })
};


export { locationBuilder, initializeLocationBoard };

