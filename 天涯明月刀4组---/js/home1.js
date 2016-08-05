/**
 * Created by 小菲 on 2016/6/16.
 */
   $(function() {
    //手风琴效果
       var gayLaplis=$("#gayLap>li");

        var gayLeft=document.getElementById("gayLeft");

       for(var i=0;i<gayLaplis.length;i++){
           gayLaplis[i].onclick=function(){

               animate(gayLeft,{"width":0});
               for (var j = 0; j < gayLaplis.length; j++) {

                   animate(gayLaplis[j], {"width":68});
               }

               animate(this, {"width": 459});

           }
       }
        /*$("#gayLap>li").click(function(){
            var index=$(this).index();
            $("#gayLap>li>.bg1").eq(index).css("background","url(../images/fanstab.jpg) -408px 0 no-repeat")
        })*/


       //图标效果
        $(".gayUl>li").mouseenter(function(){
            var index=$(this).index();
            $(".gayUl>li> i").eq(index).animate({
                top:'-40px',
                opacity:'0',

            },500)
            $(".gayUl>li p").eq(index).animate({
                top:"-38px"
            },300)

        })
       $(".gayUl>li").mouseleave (function(){
           var index=$(this).index();
           $(".gayUl>li>i").eq(index).animate({
               top:'25px',
               opacity:'1',

           },500)
           $(".gayUl>li p").eq(index).animate({
               top:"0"
           },300)
       })




       function animate(obj, json) {
           clearInterval(obj.timer);
           obj.timer = setInterval(function () {
               var flag = true;
               for (var k in json) {//json {属性名:属性目标值} { k : json[k]}
                   var leader = parseInt(getStyle(obj, k)) || 0;
                   var target = json[k];
                   var step = (target - leader) / 10;
                   step = step > 0 ? Math.ceil(step) : Math.floor(step);
                   leader = leader + step;
                   obj.style[k] = leader + "px";
                   if (leader != target) {
                       flag = false;
                   }
               }
               if (flag) {
                   clearInterval(obj.timer);
               }
           }, 15);
       }

       function getStyle(obj, attr) {
           if (obj.currentStyle) {
               return obj.currentStyle[attr];
           } else {
               return window.getComputedStyle(obj, null)[attr];
           }
       }



    })
