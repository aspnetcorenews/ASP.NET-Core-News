$(document).ready(function(){

    // Navbar navigation
    $('#navbarScroll .navbar-nav .nav-item .nav-link').on('click', function(e) {
        var linkItem = $(this).get(0),
            linkItemId = $(linkItem).attr('href');

        if(linkItemId.substring(0, 1) === "#") {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(linkItemId).offset().top - 86
            }, {
                duration: 600,
                start: function() {
                    $('.navbar-collapse').collapse('hide');
                },
                complete: function() {
                    if(linkItemId === "#newsletter") {
                        $("#start").focus();
                    }
                }
            });
        }
    });

    // Go to section
    $("#goto-newsletter").click(function(e) {
        $('html, body').animate({
            scrollTop: $("#newsletter").offset().top - 86
        }, {
            duration: 800,
            start: function() {
                $('.navbar-collapse').collapse('hide');
            },
            complete: function() {
                $("#start").focus();
            }
        });
    });

    // Section exists on URL
    $(window).on('load', function() {
        if(window.location.search.includes("?section=")) {
            var section = window.location.search.replace("?section=", "");
            if(section) {
                $('html, body').animate({
                    scrollTop: $('#' + section).offset().top - 86
                }, 600);
            }
        }
    });

    // Navbar scroll
    function navbarScroll() {
        var scroll = $(window).scrollTop();
        if(scroll < 1){
            $('.navbar-dark').removeClass('slim-mode');
        } else{
            $('.navbar-dark').addClass('slim-mode');
        }
    }
    $(window).scroll(function(ev){
        ev.preventDefault();
        navbarScroll();
    });
    navbarScroll();

    // TypedJS

    var typed = new Typed('.rotator', {
        strings: ["ASP.NET Core", "Razor Pages", "Blazor", "SignalR", "MVC", "gRPC"],
        typeSpeed: 30,
        backDelay: 2000,
        backSpeed: 30,
        loop: true
    });
});