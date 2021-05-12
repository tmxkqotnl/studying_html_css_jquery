$(document).ready(()=>{
    $('.stars .fa-star').click(function(){
        $(this).addClass('active');
        $(this).prevAll().addClass('active');
        $(this).nextAll().removeClass('active');

        var rating = $(this).index(); //start from 0
        switch(rating){
            case 0:
                $('.print').html('<img src="images/star-lv1.png"> Very Bad');
                break;
            case 1:
                $('.print').html('<img src="images/star-lv2.png"> Bad');
                break;
            case 2:
                $('.print').html('<img src="images/star-lv3.png"> So so');
                break;
            case 3:
                $('.print').html('<img src="images/star-lv4.png"> Good');
                break;
            case 4:
                $('.print').html('<img src="images/star-lv5.png"> Very Good');
                break;
            default:
                break;
        };

    });
});