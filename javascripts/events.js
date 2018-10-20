
const filterSearch = () => {
    $('#searchBar').keyup(() => {
        $('.card-locations').each(function(){
            let val = $('#searchBar').value().toLowerCase();
            if($(this).text().toLowerCase().includes(val) === true) {
                $(this.closest('.locationsOfMovie')).show();
            } else {
                $(this.closest('.locationsOfMovie')).hide();
            }
        })
    })
};


const filterButtons = () => {
    $(".timeOfDay").on('click', (e) => {
        const element = $(event.target).text().toLowerCase();
        $(".shoot-time").each(function () {
            if($(this).text().toLowerCase().includes(element) === true) {
                $(this.closest('.locationsOfMovie')).show();
            } else {
                $(this.closest('.locationsOfMovie')).hide();
        }
    })
    })
}

$('#every').on('click', (e) => {
    $('.locationCard').show();
})

export { filterSearch, filterButtons }



    // $("#searchBar").on("keyup", function() {
    //     let value = $(this).val().toLowerCase();
