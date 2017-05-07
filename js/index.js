/**
 * Created by Administrator on 2017/5/7.
 */
$(function () {
    search();
    // secondKill();
});
/*头部搜索*/
var search = function(){
    /*搜索框对象*/
    var search = $("#jd_header_box");
    /*banner对象*/
    var banner = $("#jd_banner");
    window.onscroll = function(){
        var top = scroll().top;
        /*当滚动高度大于banner的高度时候颜色不变*/
        if(top > 100){
            search.css("background","rgba(201,21,35,0.85)");
        }else{
            search.css("background","rgba(201,21,35,0)")
        }
    };
};
/*判断滚动的距离*/
function scroll() {
    //判断当前的浏览器是否是IE9+ 或者其他浏览器
    if (window.pageYOffset != null) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        };
    }
    //检测是否是怪异模式浏览器，就是没有声明<!DOCTYPE html>
    else if(document.compatMode == "CSS1Compat"){
        //正常模式
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        };
    }
    //怪异浏览器
    return {
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    };
}
/*广告轮播图的动画效果*/
