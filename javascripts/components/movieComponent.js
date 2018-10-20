const movieBuilder = (arrayOfMovie) => {
    let stringBuilder = '';
    arrayOfMovie.forEach((movie) => {
        stringBuilder += `<div class="movieCard">
             <img class="card-img-top" src="${movie.image}" alt="Card image cap">
                 <div class="card-body">
                    <h5 class="card-title">${movie.name}</h5>
                    <p class="card-text">${movie.genre}</p>
                    <p class="card-text">${movie.estimatedRelease}</p>
                   <p class="card-text">${movie.description}</p>
                 </div>
         </div>`
    });
$('#movieSpace').append(stringBuilder);
};

export { movieBuilder };