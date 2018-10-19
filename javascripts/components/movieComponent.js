const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

let locations = [
    {
        image: "../images/Chinatown.png",
        name: "Thunder Dome",
        location: "China Town",
        shootTime: "After Dark"
    },
    {
        image: "../images/Rabbits.png",
        name: "Thunder Field",
        location: "The Grasslands",
        shootTime: "Morning"
    }
];



const locationBuilder = () => {
        let stringBuilder = '';
    for (let i = 0; i < locations.length; i++) {
        stringBuilder = `<div class="movieCard">`
        stringBuilder +=  `<div class="card-group">`
        stringBuilder +=    `<div class="card">`
        stringBuilder +=       `<img class="card-img-top" src="${locations[i].image}" alt="Card image cap">`
        stringBuilder +=          `<div class="card-body">`
        stringBuilder +=             `<h5 class="card-title">${locations[i].name}</h5>`
        stringBuilder +=             `<p class="card-text">${locations[i].location}</p>`
        stringBuilder +=             `<p class="card-text"><small class="text-muted">${locations[i].shootTime}</small></p>`
        stringBuilder +=          `</div>`
        stringBuilder +=     `</div>`
        stringBuilder +=  `</div>`
        stringBuilder +=  `</div>`
        printToDom(stringBuilder, 'locationSpace');
    }
    
};

locationBuilder();