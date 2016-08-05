

//window.onload = function () {


    //手风琴部分start
    $(function () {
        $(".enterbox").mouseenter(function () {
            $(this).hide().next().show().parent().siblings().children(".box").hide().prev().show();

        })
    });
    //手风琴部分end
//}