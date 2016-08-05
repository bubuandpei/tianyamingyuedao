/**
 * Created by 张羽昆 on 2016/6/16.
 */

window.onload = function () {
    //三小图处轮播图
    var timer = null;
    var threePics = document.getElementById("threePics");
    var screen = threePics.children[2];
    var ul = screen.children[0];
    var ulLis = ul.children;
    var ol = screen.children[1];
    var imgWidth = screen.offsetWidth;

    for (var i = 0; i < ulLis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "current";
    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);


    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            this.className = "current";
            var target = -this.index * imgWidth;
            animate(ul, target);
            square = pic = this.index;
        }
    }
    screen.onmouseover = function () {
        clearInterval(timer);
    }
    screen.onmouseout = function () {
        timer = setInterval(playNext, 1000);
    }
    var pic = 0;
    timer = setInterval(playNext, 1000);
    var square = 0;

    function playNext() {
        if (pic === ulLis.length - 1) {
            ul.style.left = 0 + "px";
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, target);
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        olLis[square].className = "current";

    }


}


//下载客户端处动态图
$(function () {
    $("#enterDownload").mouseenter(function () {
        $("#downloadTop").fadeIn(0, function () {
        });
        $("#downloadDown").fadeOut(0, function () {
        });
    })
    $("#enterDownload").mouseleave(function () {
        $("#downloadTop").fadeOut(0, function () {
        });
        $("#downloadDown").fadeIn(0, function () {
        });
    })
})



function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 30;
        step = leader < target ? step : -step;
        if (Math.abs(leader - target) > Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15);
}

