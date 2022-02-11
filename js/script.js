$(function() {
    $("#header").load("assets/header.html");
    $("#footer").load("assets/footer.html");
    
})

$('.dropdown__button').click(function(){
    $('.dropdown__list').toggle('.active');
});
$('.leng').click(function(){
    $('.dropdown__list').toggle('.active');
});
