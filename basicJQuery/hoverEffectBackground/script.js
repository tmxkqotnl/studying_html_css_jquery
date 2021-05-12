$(document).ready(()=>{
    $('.navi li').mouseenter(function(){
        var img = $(this).attr("data-img");
        $('.photo').css({
            'background':`url(${img}) no-repeat center center`,
            'background-size':'cover'
        });
    });
    $('.navi li').mouseleave(function(){
        $('.photo').css({
            'background':'',
        });
    });
});