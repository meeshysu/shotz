import { locationBuilder } from "../components/locationComponent.js";

$.get('../db/locations.json')
    .done((data) => {
        locationBuilder(data.locations)
    })
    .fail((error) => {
        console.error(error);
    });
