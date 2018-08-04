$(document).ready(function(){

    var viewportHeight = window.innerHeight;
    // Height of the top section (on mobile) is 60vh
    // Height of the menu in the middle is 80px
    // We want to set the menu to be fixed after the scroll position
    // is greater than 60% of the viewport height, minus half the height of the menu
    var fixedHeaderHeight = (viewportHeight * .60) - 40;
    var header = $("#header");
    var navigationMenu = $("#nav-menu");
    var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
    $(window).scroll(function() {
        var doc = document,
            scrollPosition = doc.body.scrollTop || doc.documentElement.scrollTop;

        // Height of the top section on mobile is 60% of the vertical height
        // Want to detect when
        if (scrollPosition >= fixedHeaderHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
            navigationMenu.removeClass("open");
            navigationMenu.addClass("close");
        }
    });

    $("#nav-bar #hamburger-icon").on('click', function(event) {
        if (navigationMenu.hasClass("open")) {
            navigationMenu.removeClass("open");
            navigationMenu.addClass("close");
        } else {
            navigationMenu.removeClass("close");
            navigationMenu.addClass("open");
        }
    });

    $(".nav-menu-item-link").on('click', function(event) {
        var goToSection = event.currentTarget.dataset.section;
        var section = document.getElementById(goToSection);
        var verticalPosition = $(section).offset().top;
        event.preventDefault();
        var options = {
            behavior: 'smooth',
            top: verticalPosition,
            left: 0
        };

        if (navigationMenu.hasClass('open')) {
            // Wait until the menu finishes closing,
            // then scroll to the page section
            navigationMenu.one('transitionend', function() {
                if (isSmoothScrollSupported) {
                    window.scrollTo(options);
                } else {
                    window.scrollTo(options.left, options.top);
                }
                // NOTE need to set focus for accessibility purposes
                // $(section).focus();
            });
        } else {
            if (isSmoothScrollSupported) {
                window.scrollTo(options);
            } else {
                window.scrollTo(options.left, options.top);
            }
            // NOTE need to set focus for accessibility purposes
            // $(section).focus();
        }

        navigationMenu.removeClass("open");
        navigationMenu.addClass("close");
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
