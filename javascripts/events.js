
const filterSearch = () => {
    $('#searchBar').keypress(function () {
        let filter = $(this).val();
        $('.locationsOf').not(`:contains(${filter})`).fadeOut();
    })
}


const filterButtons = () => {
    $(".timeOfDay").on('click', (e) => {
        const element = $(e.target).text().toLowerCase();
        $(".shootTime").each(function () {
            if ($(this).text().toLowerCase().includes(element) === true) {
                $(this.closest('.locationsOf')).show();
            } else {
                $(this.closest('.locationsOf')).hide();
            }
        })
    })
};

$('#every').on('click', () => {
    $('.locationsOfMovie').show();
})

export { filterButtons, filterSearch }

