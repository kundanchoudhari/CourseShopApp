$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleclass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});