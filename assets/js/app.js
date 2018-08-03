$(document).ready(function(){

    var viewportHeight = window.innerHeight;
    // Height of the top section (on mobile) is 60vh
    // Height of the menu in the middle is 80px
    // We want to set the menu to be fixed after the scroll position
    // is greater than 60% of the viewport height, minus half the height of the menu
    var fixedHeaderHeight = (viewportHeight * .60) - 40;
    var header = $("#header");
    $(window).scroll(function() {
        var doc = document,
            scrollPosition = doc.body.scrollTop || doc.documentElement.scrollTop;

        // Height of the top section on mobile is 60% of the vertical height
        // Want to detect when
        if (scrollPosition >= fixedHeaderHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
            $("#nav-menu").removeClass("open");
            $("#nav-menu").addClass("close");
        }
    });

    $("#nav-bar #hamburger-icon").on('click', function(event) {
        var menu = $("#nav-menu");
        if (menu.hasClass("open")) {
            menu.removeClass("open");
            menu.addClass("close");
        } else {
            menu.removeClass("close");
            menu.addClass("open");
        }
    });

    //Display description of a GOLD rotation when
    //hovering over its title
    $(".gold-rotations-title").click(function(){
        $(this).next(".rotation-description").toggle(300);
        $(this).prev().toggleClass("icon-rotate-90", 300);
    });

    $(".screenshot-container").hover(function() {
        $(this).children(".portfolio-hover").toggle();
    });


});
