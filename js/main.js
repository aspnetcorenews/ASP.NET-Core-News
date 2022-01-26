$(document).ready(function(){
    $("#goto, #goto2").click(function(e) {
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
    $("#gotoSubmit").click(function() {
        $('html, body').animate({
            scrollTop: $("#submit").offset().top - 86
        }, {
            duration: 800,
            start: function() {
                $('.navbar-collapse').collapse('hide');
            }
        });
    });
    $("#gotoAbout").click(function() {
        $('html, body').animate({
            scrollTop: $(".details").offset().top - 86
        }, {
            duration: 800,
            start: function() {
                $('.navbar-collapse').collapse('hide');
            }
        });
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