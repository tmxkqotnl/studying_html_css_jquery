$(document).ready(()=>{
    $('.tab-menu li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var data_alt = $(this).attr('data-alt');
        $('.tabs div').removeClass('active');
        $(`.tabs #${data_alt}`).addClass('active');
    });
});