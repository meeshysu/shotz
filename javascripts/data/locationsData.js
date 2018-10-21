import { locationBuilder } from "../components/locationComponent.js";

const locationData = () => {
$.get('../db/locations.json')
    .done((data) => {
        locationBuilder(data.locations)
    })
    .fail((error) => {
        console.error(error);
    });
}

export { locationData };