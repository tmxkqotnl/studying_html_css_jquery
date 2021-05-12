$(document).ready(()=>{
    $('.trigger').click(function(){
        $('.trigger').toggleClass('active');
        $('.modal').fadeToggle();
    });
    var bgm = document.getElementById('bgm');
    bgm.volume = 0.2;
});