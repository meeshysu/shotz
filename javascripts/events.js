
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

export { filterButtons, filterSearch }
 
