

const locationBuilder = (arrayOfLocations) => {
    let stringBuilder = '';
    arrayOfLocations.forEach((location) => {
    stringBuilder += `<div class="movieCard">
         <div class="card-group">
        <div class="card">
              <img class="card-img-top" src="${location.image}" alt="Card image cap">
                  <div class="card-body">
                     <h5 class="card-title">${location.name}</h5>
                     <p class="card-text">${location.location}</p>
                    <p class="card-text"><small class="text-muted">${location.shootTime}</small></p>
                  </div>
              </div>
            </div>
          </div>`;
    });
 $('#locationSpace').append(stringBuilder);
};



export { locationBuilder };