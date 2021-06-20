/* mobile nav menu functions */
$(document).ready(function () {
    $(".menu-open-btn").click(function () {
        $(".main-menu-container").fadeIn(100);
        $(".main-menu").css("transform", "translate(0%,0%)");

    });
});

$(document).ready(function () {
    $(".menu-close-btn").click(function () {
        $(".main-menu-container").fadeOut(100);
        $(".main-menu").css("transform", "translate(-100%,0%)");
    });
});

$(document).ready(function () {
    $('.main-menu-container').on('click', function (e) {
        if (e.target !== this)
            return;
        $(".main-menu-container").fadeOut(100);
        $(".main-menu").css("transform", "translate(-100%,0%)");
    });
});


/* open new tab */
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}