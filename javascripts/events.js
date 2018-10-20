
const filterSearch = () => {
    $('#searchBar').keyup(() => {
        $('.cardInfo').each(function(){
            let val = $('#searchBar').val().toLowerCase();
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
        const element = $(e.target).text().toLowerCase();
        $(".shootTime").each(function () {
            if($(this).text().toLowerCase().includes(element) === true) {
                $(this.closest('.locationsOfMovie')).show();
            } else {
                $(this.closest('.locationsOfMovie')).hide();
        }
    })
    })
}

$('#every').on('click', () => {
    $('.locationsOfMovie').show();
})

export {  filterButtons, filterSearch }

