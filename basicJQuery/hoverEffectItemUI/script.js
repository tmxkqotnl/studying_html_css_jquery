$(document).ready(function(){
    $('.sizes span').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.colors span').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.like').click(function(){
        $(this).toggleClass('active');
    });
});