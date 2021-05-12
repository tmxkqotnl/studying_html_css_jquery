$(document).ready(() => {
    $(".testimonial-pic img").click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var data_alt = $(this).attr("data-alt");
        $('.content').removeClass('active');
        $(`#${data_alt}`).addClass('active');
    });
});