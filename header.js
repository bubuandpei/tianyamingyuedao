$(function () {
    //鼠标移动到DNF广告时，将当前隐藏，显示下面大广告，并设置ostTx\#gameTop层级变高
    $("#ostDnf").mouseenter(function () {

        $(this).css("opacity",0);
        $("#ostPic").show();

    })
    //鼠标离开大广告时，让当前盒子隐藏，删除之前设置的层级样式，并显示DNF广告
    $("#ostDnf").mouseleave(function () {

        $(this).css("opacity",1);
        $("#ostPic").hide();
    });

    //鼠标移动到排行榜时，显示ostRank
    $("#gameTop").mouseenter(function () {
        $(this).addClass("gameTop").children("h3").css("cursor","pointer");
        $("#iconTop").addClass("iconTopHover");
        $(this).children("div").show();
    });
    //鼠标离开排行榜时，隐藏ostRank
    $("#gameTop").mouseleave(function () {
        $(this).removeClass("gameTop");
        $("#iconTop").removeClass("iconTopHover");
        $(this).children("div").hide();
    });

    //鼠标移动到li下的.rankItem时，排他添加current类名
    $("#rankControl1>.colBody .rankItem").mouseenter(function () {
        //遍历每个li.rankItem并排他设置current类名
        $(this).each(function (index, ele) {
            $(this).addClass("current").siblings(".rankItem").removeClass("current");
        })
    });
    $("#rankControl2>.colBody .rankItem").mouseenter(function () {
        $(this).each(function (index, ele) {
            $(this).addClass("current").siblings(".rankItem").removeClass("current");
        })
    });
    $("#rankControl3>#colBody1 .rankItem").mouseenter(function () {
        $(this).each(function (index, ele) {
            $(this).addClass("current").siblings(".rankItem").removeClass("current");
            //判断#colBody2中的li.rankItem有没有current类名，有就删除
            if ($("#rankControl3>#colBody2 .rankItem").hasClass("current")) {
                $("#rankControl3>#colBody2 .rankItem").removeClass("current");
            };
        });
    });
    $("#rankControl3>#colBody2 .rankItem").mouseenter(function () {
        $(this).each(function (index, ele) {
            $(this).addClass("current").siblings(".rankItem").removeClass("current");
            //判断#colBody1中的li.rankItem有没有current类名，有就删除
            if ($("#rankControl3>#colBody1 .rankItem").hasClass("current")) {
                $("#rankControl3>#colBody1 .rankItem").removeClass("current");
            };
        });
    });

});

