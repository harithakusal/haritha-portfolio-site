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


/* nav button click function */
$(".nav-contact-btn").click(function () {
    $('html, body').animate({
        scrollTop: $(".connect").offset().top - 70
    }, 1000);
    $("#main-menu-container").fadeOut(100);
    $("#main-menu").css("width", "0");
});


/* open new tab */
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
