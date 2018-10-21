const locationBuilder = (arrayOfLocations) => {
    let stringBuilder = '';
    arrayOfLocations.forEach((location) => {
      stringBuilder += `<div id="locationsOfMovie" class="card locationsOf">
            <img class="card-img-top" src="${location.image}" alt="Card image cap">
                <div class="card-body card-locations">
                     <h5 class="card-title">${location.name}</h5>
                     <p class="card-text">${location.location}</p>
                </div>
                <div class="card-body shootTime">
                    <p class="card-text">${location.shootTime}</p>
            </div>
        </div>`;
    });
 $('#locationSpace').append(stringBuilder);
};

export { locationBuilder };