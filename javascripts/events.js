
const filterSearch = () => {
    $('#searchBar').keypress(function () {
        let filter = $(this).val();
        $('.locationsOf').not(`:contains(${filter})`).fadeOut();
    })
}


const filterButtons = () => {
    $(document).ready(function() {
        $('.timeOfDay').on('click', (e) => {
            $('.locationsOf').not(`:contains(${location.shootTime})`).fadeOut();
        })
    })
};


export { filterButtons, filterSearch }

