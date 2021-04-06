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


// Jquery Contactcards Settings
var contact = function() {

    // Email Lock animation
    
    $('#emailbox').on('mouseenter',() => {
        $('#email').css({"visibility":"visible", "transition":"0.3s"} )
        $('#padlockimg').attr("src", "4.contact/contact-attachments/padlock-open.png")
        }),

    $('#emailbox').on('mouseleave',() => {
        $('#email').css({"visibility":"hidden", "transition":"0.3s"} )
        $('#padlockimg').attr("src", "4.contact/contact-attachments/padlock-closed.png")
        })    
    };
    
    $(document).ready(contact);

