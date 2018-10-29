import { initializeMovieBoard } from './components/movieComponent.js';
import { initializeLocationBoard } from './components/locationComponent.js';
import { filterSearch } from './events.js';



const initializeApp = () => {
    initializeMovieBoard();
    initializeLocationBoard();
    filterSearch();
};
initializeApp();