$(function(){
//smooth scrolling
$('nav a').bind('click',function(){

   $('html,body').stop().animate({
        scrollTop:$($(this).attr('href')).offset().top
    },1500, 'easeInOutExpo');
    event.preventDefault();
    });

//wow
new WOW().init();
});

function mobile(){
//toggle the hamburger button
$("nav a").click(function(){
    $("li a").hide();
});

$("button").click(function(){
    $("li a").show();
});
}



    