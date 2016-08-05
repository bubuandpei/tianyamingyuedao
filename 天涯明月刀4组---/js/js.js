/**
 * Created by sony on 2016/6/17.
 */
$(function () {
    //游戏下载区，鼠标经过高亮
    $(".sidertop-one").mouseenter(function () {
        $(".sidertop-one").css("opacity",1);
    })
    $(".sidertop-one").mouseleave(function () {
        $(".sidertop-one").css("opacity",0.8)
    })
    $(".pop").mouseenter(function () {
        $(this).css("opacity",1).siblings().css("opacity",0.8)
    })
    $(".pop").mouseleave(function () {
        $(".pop").css("opacity",0.8)
    })
    //资料站鼠标经过资料站
    //
    //$(".qnav1").mouseenter(function () {
        //    $(".qnav1>.qnavr").animate({"top":"0px"},300).fadeOut(300);
        //    $(".qnav1>a").animate({"top":"20px"},1000)
        //})
        //$(".qnav1").mouseleave(function () {
        //    $(".qnav1>.qnavr").animate({"top":"15px"},500).fadeIn(300);
        //    $(".qnav1>a").animate({"top":"63px"},1000)
        //})
    //天一阁
    $(".qnvabottom").mouseenter(function () {
        $(this).css("opacity",1).siblings().css("opacity",0.8)
    })
    $(".qnavbottom").mouseleave(function () {
        $(this).css("opacity",0.8)
    })
    //天刀助手，官方微信
    $("#qq").click(function () {
        $(".pic1").css("display","block");
        $(".pic2").css("display","none");
    })
    $(".wxwx").click(function () {
        $(".pic1").css("display","none");
        $(".pic2").css("display","block");
    })
    //链接
    $(".partnerlist>li").mouseenter(function () {
        $(this).css("opacity",1).siblings().css("opacity",0.6)
    })
    $(".partnerlist>li").mouseleave(function () {
        $(".partnerlist>li").css("opacity",0.6)
    })
    $(".qnav1").mouseenter(function () {
        var index=$(this).index();
        $(".qnavr").eq(index).animate({
            top:"0",opacity:"0"
        },500)
        $(".qnav1>a").eq(index).animate({
            top:"40px",
        },500)
        $(".qnav1").css("opacity",1);

    })
    $(".qnav1").mouseleave(function () {
        var index=$(this).index();
        $(".qnavr").eq(index).animate({
            top:"15px",opacity:"1"
        },500)
        $(".qnav1>a").eq(index).animate({
            top:"67px",
        },500)
        $(".qnav1").eq(index).css("opacity",0.8);
    })

})
