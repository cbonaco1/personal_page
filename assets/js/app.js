$(document).ready(function(){

    var currentScoll = 0;
    $(window).scroll(function() {
        var win = window,
            doc = document,
            newScroll = win.scrollY,
            topBarStyles = doc.getElementById("section-topbar").style;

        // If current scroll position is greater than currentScoll,
        // then user is scrolling down, so hide the nav bar
        if (newScroll > currentScoll) {
            topBarStyles.opacity = "0";
            topBarStyles.visibility = "hidden";
        }
        // If less than currentScoll, then scrolling up
        else {
            topBarStyles.opacity = "1";
            topBarStyles.visibility = "visible";
        }

        // Update currentScoll regardless so next scroll
        // has current scroll position to compare to
        currentScoll = newScroll;

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
