$(function () {
    $(".picBox1").mouseover(function () {

        $(".mask1").stop(false, true).fadeIn(800, function () {

        });
        $(".picBox1 .p3").css("backgroundColor", "#181818");
    });
    $(".picBox1").mouseleave(function () {
        $(".mask1").stop(false, true).fadeOut(800, function () {

        });
        $(".picBox1 .p3").css("backgroundColor", "");
    });

    $(".picBox2").mouseover(function () {

        $(".mask2").stop(false, true).fadeIn(800, function () {

        });
        $(".picBox2 .p3").css("backgroundColor", "#181818");
    });
    $(".picBox2").mouseleave(function () {
        $(".mask2").stop(false, true).fadeOut(800, function () {

        });
        $(".picBox2 .p3").css("backgroundColor", "");
    });

    $(".picBox3").mouseover(function () {

        $(".mask3").stop(false, true).fadeIn(800, function () {

        });
        $(".picBox3 .p3").css("backgroundColor", "#181818");
    });
    $(".picBox3").mouseleave(function () {
        $(".mask3").stop(false, true).fadeOut(800, function () {

        });
        $(".picBox3 .p3").css("backgroundColor", "");
    });
});
