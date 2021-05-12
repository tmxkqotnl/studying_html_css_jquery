$('.showBtn').click(()=>{
    $('.container div').show();
});
$('.hideBtn').click(()=>{
    $('.container div').hide();
});
$('.toggleBtn').click(()=>{
    $('.container div').toggle();
});
$('.slideDown').click(()=>{
    $('.container2 div').slideDown();
});
$('.slideUp').click(()=>{
    $('.container2 div').slideUp();
});
$('.slideToggle').click(()=>{
    $('.container2 div').slideToggle();
});
$('.fadeIn').click(()=>{
    $('.container3 div').fadeIn('fast');
});
$('.fadeOut').click(()=>{
    $('.container3 div').fadeOut('slow');
});
$('.fadeToggle').click(()=>{
    $('.container3 div').fadeToggle(2000);
});