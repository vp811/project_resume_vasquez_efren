$(document).ready(function () {
    $('#name').click(function () {
        $('#name').css('color', 'yellow');
    });

    $('.rotate').textrotator({
        animation: 'dissolve',
        separator: ',',
        speed: 2000
    });
});

jQuery(function ($) {
    $(document).ready(function () {
    //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp();
    });
});
