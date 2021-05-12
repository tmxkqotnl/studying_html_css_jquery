$(document).ready(()=>{
    
    $('.title').click(function(){
        $(this).siblings('.title').removeClass('active');
        $(this).addClass('active');
        $(this).siblings('.description').stop().slideUp();
        $(this).next().stop().slideDown();

        var img = $(this).attr('data-img');
        $('.image img').attr('src',img);
    });
    $('.title.active').trigger('click');
});