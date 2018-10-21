import { filterButtons, filterSearch } from "./events.js";
import { locationData } from "./data/locationsData.js";
import { movieData } from "./data/movieData.js";


const initializeApp = () => {
    filterButtons();
    filterSearch();
    movieData();
    locationData();
};
initializeApp();