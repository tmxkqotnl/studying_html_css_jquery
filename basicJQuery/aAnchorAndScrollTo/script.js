$(document).ready(()=>{
    $('header a, .btn a').click(function(){
        $.scrollTo(this.hash||0,600);
        e.preventDefault();
    });
});