$(function(){

        var $banner=$('.sn_banner');
        var $imgsbox=$('.sn_banner ul:first');
        var $width=$banner.width();
        var $pointsBox=$('.sn_banner ul:last');
        var $points=$pointsBox.find('li');
        console.log($width);


        var animateFun=function(){
                $imgsbox.animate({"transform":"translateX("+(-index*$width)+"px)"},300,function(){
                        // console.log(index);
                        if(index>=9){
                                index=1;
                                $imgsbox.css({"transform":"translateX("+(-index*$width)+"px)"});
                        }else if(index<=0){
                                index=8;
                                $imgsbox.css({"transform":"translateX("+(-index*$width)+"px)"});

                        };
                        // 1-8
                        // 0-7  即index-1
                        //2点随着轮播图变化
                        $points.removeClass('now').eq(index-1).addClass('now');
                        $points.on('click',function(){
                                $points.removeClass('now');
                                $(this).addClass('now');
                                index=$(this).index()+1;
                                $imgsbox.css({"transform":"translateX("+(-index*$width)+"px)"});
                        })

                })

        }
        // 1.自动无缝滚动
        var index=1;
        var timer=setInterval(function(){
                index++;
                animateFun();
        },1000);


        //手势滑动切换
        $banner.on('swipeLeft',function(){
                index++;
                console.log('next');
                animateFun();
        }).on('swipeRight',function(){
                index--;
                console.log('prev');
                animateFun();
        })

})