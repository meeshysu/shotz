
const filterSearch = () => {
    $('#searchBar').keypress(function () {
        let filter = $(this).val();
        $('.locationsOf').not(`:contains(${filter})`).fadeOut();
    })
}


const filterButtons = () => {
    $(".body").on('click', '#morning', (e) => {
      $('.locationsOf').show();
      $('.locationsOf').not('.Morning').fadeOut();
    })
}

export { filterButtons, filterSearch }
 
