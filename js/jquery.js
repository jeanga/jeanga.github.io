$(document).ready(function() {
    console.log('doc is loaded');
    $('h1').click(function() {
        $(this).css('background-color', 'red');
        $(this).fadeOut('slow');
    });
});

