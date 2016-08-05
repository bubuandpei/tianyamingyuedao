/**
 * Created by wangxueli on 2016/6/16.
 */
$(function () {
//追加小图标,鼠标放上去高亮 官网轮播图
    var box = document.getElementById("box");
    var screen = box.children[0];
    var width = screen.offsetWidth;
    var ul = screen.children[0];
    var ol = screen.children[1];
    var lis = ul.children;
    var arrLeft = document.getElementById("left");
    var arrRight = document.getElementById("right");
    var time = null;
    var date = [{"txt": "618整点在线"},
        {"txt": " TGA线下赛"},
        {"txt": " 同人SHOW"},
        {"txt": " 精英招募"},
        {"txt": "同人大赛"},
        {"txt": "游戏助手"},]

    for (var j = 0; j < date.length; j++) {
        var li = document.createElement("li");
        li.innerHTML = date[j].txt;
        ol.appendChild(li);
    }
    var cloneImg = lis[0].cloneNode(true);
    ul.appendChild(cloneImg);
    var olLis = ol.children;
    olLis[0].style.backgroundColor = "#2FC3A3";
    //让对应图片滚动
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].index = i;
        olLis[i].onmouseover = function () {
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].style.backgroundColor = "rgba(72,72,73,0.8)";
            }
            this.style.backgroundColor = "rgba(47,195,163,0.5)";
            var target = -this.index * width;
            animate(ul, target);
            pic = square = this.index;
        }
    }
    //点击图标显示对应图片
    var pic = 0;
    arrRight.onclick = function () {
        play();
    }
    arrLeft.onclick = function () {
        if (pic === 0) {
            ul.style.left = -(olLis.length - 1) * width + "px";
            pic = lis.length - 1;
        }
        pic--;
        var target = -pic * width;
        animate(ul, target);
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
            ;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].style.backgroundColor = "rgba(72,72,73,0.8)";
        }
        olLis[square].style.backgroundColor = "rgba(47,195,163,0.5)";
    }
    //鼠标放上去显示箭头
    $("#box").mouseenter(function () {
        $("#arr").css("display", "block");
        clearInterval(time);
    });
    $("#box").mouseleave(function () {
        $("#arr").css("display", "none");
        time = setInterval(play, 3000);
    });
//自动播放
    time = setInterval(play, 3000);
    var square = 0;

    function play() {
        if (pic === lis.length - 1) {
            ul.style.left = 0 + "px";
            pic = 0;
        }
        pic++;
        var target = -pic * width;
        animate(ul, target);
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].style.backgroundColor = "rgba(72,72,73,0.8)";
        }
        olLis[square].style.backgroundColor = "rgba(47,195,163,0.5)";
    }

    //合作轮播图
    var date = [{"txt": "TGP福利"},
        {"txt": "会员好礼"},
        {"txt": "心悦专享世界"},
        {"txt": " FIFA大赛"},
        {"txt": "道聚城"},
        {"txt": " 迅游大战"},]
    var str = "";
    for (var i = 0; i < date.length; i++) {
        var d = date[i];
        str += '<li>' + d.txt + '</li>';
    }
    $(".screen1>ol").html(str);
    $(".screen1>ol>li").eq(0).css("backgroundColor", "rgba(47,195,163,0.5)");
    $(".screen1>ol>li").mouseenter(function () {
        var index = $(this).index();
        var Swidth = $("#box>.screen").width();
        $(this).css("backgroundColor", "rgba(47,195,163,0.5)").siblings().css("backgroundColor", "rgba(72,72,73,0.8)");
        //$("#official>li").eq(index).show(500).siblings().hide(500);
        $("#cooperation>li").eq(index).animate(
            {
                "width": '799px',
            }, 500).siblings().animate({
                'width': '0px',
            }, 500);
    });
    $(".screen1>ol>li").mouseleave(function () {
        $(".screen1>ol>li").css("backgroundColor", "rgba(72,72,73,0.8)");
    });
//点击按钮让图片滚动
    $("#right").click(function () {
        var Spic = 0;
        var Sul=document.getElementById("cooperation");

    });
//

    function animate(obj, target) {
        clearInterval(obj.time)
        obj.time = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = (target - leader ) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (leader != target) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                clearInterval(obj.time);
            }
        }, 15)
    }

//点击切换轮播图
    $("#top").addClass("current");
    //鼠标放在上边的标签上，让对应的轮播显示
    $("#top").css("backgroundColor", "rgba(47,195,163,0.5)");
    $("#top").click(function () {
        //$("#box .screen").animate({"width": "799px"}, 500).siblings().animate({"width": "0"}, 500);
        $("#box .screen").show().next().hide();
        $(this).css("backgroundColor", "rgba(47,195,163,0.5)").next().css("backgroundColor", "rgba(72,72,73,0.8)");
    });
    $("#top1").click(function () {
        //$("#box .screen").animate({"width": "799px"}, 500).siblings().animate({"width": "0"}, 500);
        $("#box .screen1").show().prev().hide();
        $(this).css("backgroundColor", "rgba(47,195,163,0.5)").prev().css("backgroundColor", "rgba(72,72,73,0.8)");
        ;
    });
//右侧信息栏样式
    $("#m-img").mouseenter(function () {
        $("#m-img>img").addClass("m-img1");
    });
    $("#m-img").mouseleave(function () {
        $("#m-img>img").removeClass("m-img1");
    });

});























