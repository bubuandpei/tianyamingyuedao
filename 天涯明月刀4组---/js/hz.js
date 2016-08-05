/**
 * Created by wangxueli on 2016/6/18.
 */
$(function () {

    var box = document.getElementById("box");
    var screen = document.getElementById("hz");
    var width = screen.offsetWidth;
    var ul = document.getElementById("cooperation");
    var ol = screen.children[1];
    var lis = ul.children;
    var arrLeft = document.getElementById("left");
    var arrRight = document.getElementById("right");
    var time = null;
    var date = [{"txt": "会员好礼"},
        {"txt": " TGP福利"},
        {"txt": " 心悦帮贡专享"},
        {"txt": " FIFA"},
        {"txt": "道聚城大赛"},
        {"txt": "迅游好礼"},]

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
        }else{
            square=olLis.length-1;;
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
//
//    var box = document.getElementById("box");
//    var screen1 = box.children[1];
//    var Swidth = screen1.offsetWidth;
//    var Sul = screen1.children[0];
//    var Sol = screen1.children[1];
//    var ulLis = Sul.children;
//    var arrLeft = document.getElementById("left");
//    var arrRight = document.getElementById("right");
//    var time = null;
//    var data = [{"txt": "TGP福利"},
//        {"txt": "会员好礼"},
//        {"txt": "心悦专享"},
//        {"txt": " FIFA"},
//        {"txt": "道聚城"},
//        {"txt": " 迅游"},]
//    for (var j = 0; j < data.length; j++) {
//        var li = document.createElement("li");
//        li.innerHTML = data[j].txt;
//        Sol.appendChild(li);
//    }
//    var cloneImg = ulLis[0].cloneNode(true);
//    Sul.appendChild(cloneImg);
//    var SolLis = Sol.children;
//    SolLis[0].style.backgroundColor = "#2FC3A3";
//    //让对应图片滚动
//    for (var i = 0; i < SolLis.length; i++) {
//        SolLis[i].index = i;
//        SolLis[i].onmouseover = function () {
//            for (var k = 0; k < SolLis.length; k++) {
//                SolLis[k].style.backgroundColor = "rgba(72,72,73,0.8)";
//            }
//            this.style.backgroundColor = "rgba(47,195,163,0.5)";
//            var target = -this.index * Swidth;
//            animate(Sul, target);
//            Spic = Ssquare = this.index;
//        }
//    }
//    //点击图标显示对应图片
//    var Spic = 0;
//    arrRight.onclick = function () {
//        Splay();
//    }
//    arrLeft.onclick = function () {
//        if (Spic === 0) {
//            Sul.style.left = -(SolLis.length - 1) * Swidth + "px";
//            Spic = ulLis.length - 1;
//        }
//        Spic--;
//        var target = -Spic * Swidth;
//        animate(Sul, target);
//        if (Ssquare > 0) {
//            Ssquare--;
//        }else{
//            Ssquare=SolLis.length-1;;
//        }
//        for (var i = 0; i < SolLis.length; i++) {
//            SolLis[i].style.backgroundColor = "rgba(72,72,73,0.8)";
//        }
//        SolLis[Ssquare].style.backgroundColor = "rgba(47,195,163,0.5)";
//    }
//    //鼠标放上去显示箭头
//    $("#box").mouseenter(function () {
//        $("#arr").css("display", "block");
//        clearInterval(time);
//    });
//    $("#box").mouseleave(function () {
//        $("#arr").css("display", "none");
//        time = setInterval(Splay, 3000);
//    });
////自动播放
//    time = setInterval(Splay, 3000);
//    var Ssquare = 0;
//    function Splay() {
//        if (Spic === ulLis.length - 1) {
//            Sul.style.left = 0 + "px";
//            Spic = 0;
//        }
//        Spic++;
//        var target = -Spic * Swidth;
//        animate(Sul, target);
//        if (Ssquare < SolLis.length - 1) {
//            Ssquare++;
//        } else {
//            Ssquare = 0;
//        }
//        for (var i = 0; i < SolLis.length; i++) {
//            SolLis[i].style.backgroundColor = "rgba(72,72,73,0.8)";
//        }
//        SolLis[Ssquare].style.backgroundColor = "rgba(47,195,163,0.5)";
//    }
//

});