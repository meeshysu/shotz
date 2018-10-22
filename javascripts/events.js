
const filterSearch = () => {
    $('#searchBar').keypress(function () {
        let filter = $(this).val();
        $('.locationsOf').not(`:contains(${filter})`).fadeOut();
    })
}


const filterButtons = () => {
    $(".body").on('click', '#morning', (e) => {
      $('#locationSpace').addClass(function( index, currentClass) {
          let addedClass;
        if (currentClass === '.Morning') {
            addedClass.show();
        } else {
            
        }
      })
    })
}

export { filterButtons, filterSearch }
 
