$(window).on('load', function() { // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(500).fadeOut("slow");
     $('body').removeClass('loading'); // will fade out the white DIV that covers the website.
});