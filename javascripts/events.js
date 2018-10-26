
//SEARCH BAR FILTER
const filterSearch = () => {
    $('#searchBar').keypress(function () {
        let filter = $(this).val().toUpperCase();
        $('.locationsOf').not(`:contains(${filter})`).fadeOut();
    })
}


// BUTTONS FILTER
const filterButtons = () => {
   $('#morning').click(() => {
       $('.locationsOf').show();
       $('.locationsOf').not('.Morning').hide();
   });
   $('#afternoon').click(() => {
       $('.locationsOf').show();
       $('.locationsOf').not('.Afternoon').hide();
   });
   $('#evening').click(() => {
       $('.locationsOf').show();
       $('.locationsOf').not('.Evening').hide();
   });
   $('#afterDark').click(() => {
       $('.locationsOf').show();
       $('.locationsOf').not('.After').hide();
   });
       $('#every').click(() => {
       $('.locationsOf').show();
});
}


// SINGLE OUT MOVIE CARD

const showSingleMovieCard = () => {
    $('#movieSpace').on('click', '.movieCard', (e) => {
        const movieToClick = $(e.target).closest('.movieCard').attr('id');
        $('#movieSpace').hide;
        $('#locationSpace').show;
    showSingleMovieCard(movieToClick);
    })
   
}

export { filterButtons, filterSearch }
 
