import { initializeMovieBoard } from './components/movieComponent.js';
import { initializeLocationBoard } from './components/locationComponent.js';


const initializeApp = () => {
    initializeMovieBoard();
    initializeLocationBoard();
};
initializeApp();