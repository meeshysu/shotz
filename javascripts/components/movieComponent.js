const movieBuilder = (moviesArray) => {
    let stringBuilder = '';
    moviesArray.forEach((movie) => {
        stringBuilder += `<div class="card-group">`
        stringBuilder +=    `<div class="card">`
        stringBuilder +=       `<img class="card-img-top" src="" alt="Card image cap">`
        stringBuilder +=          `<div class="card-body">`
        stringBuilder +=             `<h5 class="card-title">Name</h5>`
        stringBuilder +=             `<p class="card-text">Location</p>`
        stringBuilder +=             `<p class="card-text"><small class="text-muted">Shoot Time/small></p>`
        stringBuilder +=          `</div>`
        stringBuilder +=     `</div>`
        stringBuilder +=  `</div>`
    })
    stringBuilder();
};