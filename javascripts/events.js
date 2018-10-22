
const filterSearch = () => {
    $('#searchBar').keypress(function () {
        let filter = $(this).val();
        $('.locationsOf').not(`:contains(${filter})`).fadeOut();
    })
}


const filterButtons = () => {
   $('#morning').click(() => {
       $('.locationsOf').show();
       $('.locationsOf').not('.Morning').hide();
   })
}

export { filterButtons, filterSearch }
 
