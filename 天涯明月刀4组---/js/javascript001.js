
$(function () {
    $(".fl-li").mouseenter(function () {
        $(this).css("opacity", "1");
        $(this).siblings().css("opacity", "0.5");
    });
    $(".show-news-bottom").mouseleave(function () {
        $(this).find(".fl-li").css("opacity", "1");
    });
});


































