// Mobile View - Menu Class Switch
// Jquery Menu Settings

var main = function() {

    // Menu Container show Function
    
    $('.hamburger').on('click',() => {
        $('.body').toggleClass("show");
        $('.big').fadeToggle(".show");
        $('.nav-ul').toggleClass("show");
        $('.nav-a').toggleClass("show");   
        $('#mobileicon').toggleClass("show");    
        })
    };
    
    $(document).ready(main);
