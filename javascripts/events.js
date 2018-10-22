
const filterSearch = () => {
    $('#searchBar').keypress(function () {
        let filter = $(this).val();
        $('.locationsOf').not(`:contains(${filter})`).fadeOut();
    })
}


const filterButtons = () => {
    $(".timeOfDay").on('click', (e) => {
        const click = $(e.target).text().toLowerCase();
        $(".shootTime").each(function () {
            if ($(this).text().toLowerCase().includes(click) === true) {
                $(this.closest('.locationsOf')).show();
            } else {
                $(this.closest('.locationsOf')).fadeOut();
            }
        })
    })

    };


export { filterButtons, filterSearch }

