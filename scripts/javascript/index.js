//document.addEventListener('contextmenu', event => event.preventDefault());

/* spalsh screen function */
setTimeout(function () {
    $('.loading-background').fadeToggle();
}, 2000);


/* mobile nav menu functions */
$(document).ready(function () {
    $(".menu-open-btn").click(function () {
        $("#main-menu-container").fadeIn(100);
        $("#main-menu").css("width", "300px");

    });
});

$(document).ready(function () {
    $("#menu-close-btn").click(function () {
        $("#main-menu-container").fadeOut(100);
        $("#main-menu").css("width", "0");

    });
});

$(document).ready(function () {
    $('#main-menu-container').on('click', function (e) {
        if (e.target !== this)
            return;

        $("#main-menu-container").fadeOut(100);
        $("#main-menu").css("width", "0");
    });
});


/* about me text slide show */
var index = 0;
show();
function show() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    index = index + 1;
    if (index > slides.length) {
        index = 1;
    }

    slides[index - 1].style.display = "block";

    setTimeout(show, 1500);
}


/* navigation button click functions */
$(".nav-about-btn").click(function () {
    $('html, body').animate({
        scrollTop: $(".about-me-container").offset().top - 70
    }, 1000);
    $("#main-menu-container").fadeOut(100);
    $("#main-menu").css("width", "0");
});

$(".nav-project-btn").click(function () {
    $('html, body').animate({
        scrollTop: $(".featured-projects-container").offset().top - 90
    }, 1000);
    $("#main-menu-container").fadeOut(100);
    $("#main-menu").css("width", "0");
});

$(".nav-skills-btn").click(function () {
    $('html, body').animate({
        scrollTop: $(".skills-container").offset().top - 70
    }, 1000);
    $("#main-menu-container").fadeOut(100);
    $("#main-menu").css("width", "0");
});

$(".nav-contact-btn").click(function () {
    $('html, body').animate({
        scrollTop: $(".connect").offset().top - 70
    }, 1000);
    $("#main-menu-container").fadeOut(100);
    $("#main-menu").css("width", "0");
});


/* get URL parameter and, related functions */
var searchParams = new URLSearchParams(window.location.search).toString();
if (searchParams === 'btn=about') {
    $('html, body').animate({
        scrollTop: $(".about-me-container").offset().top - 70
    }, 1000);
}

var searchParams = new URLSearchParams(window.location.search).toString();
if (searchParams === 'btn=skills') {
    $('html, body').animate({
        scrollTop: $(".skills-container").offset().top - 70
    }, 1000);
}

var searchParams = new URLSearchParams(window.location.search).toString();
if (searchParams === 'btn=projects') {
    $('html, body').animate({
        scrollTop: $(".featured-projects-container").offset().top - 70
    }, 1000);
}


/* open new tab */
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

