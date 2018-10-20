const locationBuilder = (arrayOfLocations) => {
    let stringBuilder = '';
    arrayOfLocations.forEach((location) => {
      stringBuilder += 
      `<div id="locationsOfMovie" class="locationsOfMovie">
            <img class="card-img-top" src="${location.image}" alt="Card image cap">
                <div class="card-body card-locations">
                     <h5 class="card-title">${location.name}</h5>
                     <p class="card-text">${location.location}</p>
                </div>
                <div class="shootTime">
                    <p class="card-text"><small class="text-muted">${location.shootTime}</small></p>
                </div>
        </div>`;
    });
 $('#locationSpace').append(stringBuilder);
};

export { locationBuilder };